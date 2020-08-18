const express = require('express');
const router = express.Router();



const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');
module.exports = () => { //Exporta el modulo función

    router.get('/',homeController.consultasHomePage);
    
    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.consultaViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales',testimonialesController.testimonialesGet);

    router.post('/testimoniales',testimonialesController.testimonialesPost);

    return router;
}