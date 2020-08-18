const express = require('express');
const routes = require('./routes'); //importa funciones
const path = require('path');
const app = express();
const configs = require('./config');
const db = require('./config/database');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'variables.env'});


db.authenticate()
    .then(()=> console.log('db connected'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use('/',routes()); //carga funciones rutas



app.set('view engine', 'pug') //carga template pug
app.set('views',path.join(__dirname, './views')); //Ubicacion de los templates, path.join(currentFolder, viewsFolder)
app.use(express.static('public')); //Busca y carga carpeta public

const config = configs[app.get('env')]; //variable env exisste en node

app.locals.titulo = config.nombresitio; //depende de la config

//USE se ocupa para todos los verbos
app.use((req,res,next)=>{//Ocupa recurso date
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear(); //variables internas de node, los pasa entre archivos delp royecto
    res.locals.ruta = req.path;
    
    return next();
}); 

const host = process.env.HOST || '0.0.0.0'; //heroku asigna si no existe host
const port = process.env.PORT || 3000; //asigna variable port heroku

app.listen(port, host, () => {
    console.log('Servidor funcionando');
});