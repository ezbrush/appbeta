"use strict";
  exports.fecha = () => {
    // current date
    let date_ob = new Date();
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
  
    var fecha = year + "-" + month + "-" + date;
  
    return fecha;
  };
  exports.hora = () => {
    // current date
    let date_ob = new Date();
    // current hours
    let hours = date_ob.getHours();
    hours = (hours < 10 ? "0" : "") + hours;
    // current minutes
    let minutes = date_ob.getMinutes();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    // current seconds
    let seconds = date_ob.getSeconds();
    seconds = (seconds < 10 ? "0" : "") + seconds;
    // prints time in HH:MM:SS format
    //console.log(hours + ":" + minutes + ":" + seconds);
    var hora = hours + ":" + minutes + ":" + seconds;
  
    return hora;
  };
  
  