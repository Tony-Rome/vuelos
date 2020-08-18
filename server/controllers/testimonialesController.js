const Testimonial = require('../models/Testimoniales');


exports.testimonialesGet = async (req,res) =>{
    const testimoniales = await Testimonial.findAll() 
    res.render('testimoniales',{
        pagina: 'testimoniales',
        testimoniales 
    });
        
}

exports.testimonialesPost = async (req,res) =>{
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agrega tu mensaje'})
    }

    if(errores.length > 0){ //Si hay errore reenvia valores ya llenados

        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje
        })
        
    }else{
        Testimoniales.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
            .catch(err => console.log(err));
    }   
}