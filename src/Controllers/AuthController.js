const Usuario = require('../Models/usuarioModel.js');

exports.registerPage = (req,res)=>{
    res.render('register');
}

exports.registerUser= async(req,res)=>{
    console.log('registrando usuario...');
        var usuario = req.body;
        try {
            usuario.usu_stdo= 1;
            const nuevoUsuario = await Usuario.create(usuario);
            console.log('Nuevo Usuario', nuevoUsuario);     
            //req.flash('exito', 'Hemos enviado un E-mail, confirma tu cuenta');
             res.redirect('/home'); 
          //  res.render('home',{sessionFlash: mensaje }); 
        } catch (error) {
            console.log(error);
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
            // const mensaje = {
            //         type: 'error',
            //         message: `${erroresSequelize[0]}`
            //     };
            //req.flash('error', erroresSequelize);
            res.redirect('/register');
           // res.render('register',{sessionFlash : mensaje} );
        }
      
}

module.exports.signin=async (req,res,next)=>{
    try {
        const usu_mail= req.body.email;    
        const usu_pswd= req.body.password;
        const usua= await Usuario.findOne({ where: {usu_mail: usu_mail} });
        
        if(usua != null){
            const verificarPass =  usua.validarPassword(usu_pswd);
            console.log(verificarPass);
            if(verificarPass){
                res.redirect('/home'); 
                return;
            }else{
                res.redirect('/');
                return;
            }
    
        }
        res.redirect('/');
    } catch (error) {
        console.log(error);
      next();
    }       
};
exports.loginAPI =async (req,res,next)=>{
    try {
        var ok=false;var status=200;
        const usu_mail = req.body.email;
        const usu_pswd = req.body.password;
        const usua = await Usuario.findOne({ where: {usu_mail: usu_mail} });
        
        if(usua != null){
            const verificarPass =  usua.validarPassword(usu_pswd);
           // console.log(verificarPass);
            if(verificarPass){
             ok =true;
            }else{
                status=404;
            }
    
        }
        return res.json({
            ok:ok,
            status:status
        });
    } catch (error) {
        console.log(error);
        next();
    }
};