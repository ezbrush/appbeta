const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');
const path = require('path');
const moment = require('moment');
require('dotenv').config();

exports.direccion=()=>{
    console.log(path.join(__dirname, "../views/"));
}

const compile = async function(templateName, data) {
   const filePath = path.join(__dirname, "../Views/", `${templateName}.hbs`);
   const html = await fs.readFile(filePath, 'utf-8');
   return hbs.compile(html)(data);

};
hbs.registerHelper('dateFormat', function(value, format) {
   return moment(value).format(format);

});
async function encenderBrowser(){
   const browser = await puppeteer.launch( {
       args: ['--no-sandbox', '--disable-setuid-sandbox']
   });
   return browser;
};
exports.getUrl = async(url)=>{
try {
   const browser = await encenderBrowser();
   const page = await browser.newPage();
   await page.goto(url);
   var respuesta= page.url();
   console.log(respuesta);
   await browser.close();
   return respuesta;
} catch (error) {
   console.log(error);
}
};
exports.generateImage = async ( template, objeto,titular )=>{
   //{ "carrito": carrito, "fecha": fecha, "hora": hora ,"titular":titular}
   try {
       const browser = await encenderBrowser();
       const page = await browser.newPage();
       const content = await compile(`template-${template}`, objeto);
       await page.setContent(content);
       await page.emulateMediaType('screen');
       const img = await page.screenshot({
           path:  path.join(__dirname, `../../public/${titular}-${template}.png`),
           fullPage:true,
           printBackground: true,
           margin: {
               top: '50px',
               right: '50px',
               bottom: '50px',
               left: '50px'
           }
       });
       const filePath = `${process.env.URL_SERVER}/${titular}-${template}.png`;
       console.log('done');
       await browser.close();
       return filePath;
   } catch (error) {
       console.log('error:', error);
   }
};
exports.generatePdf = async ( template, objeto,titular )=>{
   //{ "carrito": carrito, "fecha": fecha, "hora": hora,"titular":titular}
   try {
       const browser = await encenderBrowser();
       const page = await browser.newPage();
       const content = await compile(`template-${template}`, objeto);
       await page.setContent(content);
       await page.emulateMediaType('screen');
       const pdf = await page.pdf({
           path:  path.join(__dirname, `../../public/${titular}-${template}.pdf`),
           format: 'Letter',
           printBackground: true,
           margin: {
               top: '50px',
               right: '50px',
               bottom: '50px',
               left: '50px'
           }
       });
       // const filePath = path.join(__dirname, "../../", 'mypdf.pdf');
       const filePath = `${process.env.URL_SERVER}/${titular}-${template}.pdf`;
       // console.log(window.location.origin);
       console.log('done');
       await browser.close();
       return filePath;
   } catch (error) {
       console.log('error:', error);
   }
}; 