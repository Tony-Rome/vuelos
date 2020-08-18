const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req,res) =>{
    const promises = [];
    
    const viajes = await  Viaje.findAll({  limit: 3  });
    

    const testimoniales = await Testimonial.findAll({ limit: 3 });

    const resultado = Promise.all(promises); //Ejecuta todos los promise
    
    //multiples consultas
    res.render('index',{
        clase: 'home',
        pagina: 'Próximos viajes',
        viajes: resultado[0], //propiedad y nombre iguales, se pasan los dos definiendo uno
        testimoniales: resultado[1]
    })
  
}