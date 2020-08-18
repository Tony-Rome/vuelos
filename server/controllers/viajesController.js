const Viaje = require('../models/Viajes');


exports.consultaViajes = async (req,res) =>{

   const viajes = await Viaje.findAll()
    res.render('viajes',{
        pagina: 'Próximos viajes',
        viajes //propiedad y nombre iguales, se pasan los dos definiendo uno
    });

  }

  exports.mostrarViaje = async (req,res) =>{

    const viaje = await Viaje.findByPK(req.params.id) //obtiene id de url
        res.render('viaje', {
            viaje
        });
}