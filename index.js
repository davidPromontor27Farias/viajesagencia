//extraemos express del paquete instalado
import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
import dotenv from 'dotenv';
dotenv.config({ path : 'variables.env'});


const app = express();

db.authenticate()
    .then(() => console.log('Base de datos autenticada'))
    .catch(error => console.log(error))

//definir puerto
const port = process.env.PORT || 4000;


//habilitar pug en nuestro archivo
app.set('view engine', 'pug');

//obtener el año actual
app.use( (req, res, next) =>{
    
    //Accedemos al objeto y le añadimos una variable
    //Acceder al año actual para mostrarlo en pantalla
    const year = new Date();
    res.locals.time = year.getFullYear();

    res.locals.nombreSitio = "Agencia de viajes";
    
    //ejecuta el siguiente midleware
    return next();

    
})
//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended : true}))

//definir la carpeta public
app.use(express.static('public'));

//agregar routers
app.use('/', router);

//Nos avisara si el servidor se conecto

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0';


app.listen(port, host, ()=>{
    console.log(`El servidor esta funcionando en el puerto`)
})