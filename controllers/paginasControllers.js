//importamos un modelo
import {Viaje} from '../models/Viaje.js'
//importamos los testimoniales
import {Testimonial} from '../models/Testimoniales.js'

const paginaInicio = async (req, res)=>{ //request : lo que enviamos,,response : lo que recibimos

    //consultamos la base de datos para mostrarlo en la vista
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit : 3}))
    try {
        //Para mostrar solo 3 viajes 
        const resultado = await Promise.all(promiseDB)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    
    }
};

const paginaNosotros =  (req, res)=>{ //request : lo que enviamos,,response : lo que recibimos
    /*pasar valores
    const viajes = "Cambiando el texto"*/
    //va a buscar el archivo con la extension .pug en la carpeta de views
    res.render('nosotros', {
        pagina: "Nosotros"
    });
};

const paginaViajes = async (req, res)=>{ 
    //consultar la base de datos
    const viajes = await Viaje.findAll();

 
    
    res.render('viajes', {
        pagina: "Viajes",
        //Le pasamos los viajes a la vista
        viajes
    });
};

const paginaTestimoniales = async (req, res)=>{ 

    try {
        //consultamos la base de datos y se lo añadimos a una variable
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
        pagina: "Testimoniales",
        testimoniales
    });
    } catch (error) {
        console.log(error)
    }

};
//Va a cargar una pagina en base a su slug
const paginaViajesDetalle = async (req, res) => {
    const {slug} = req.params;
    
    //Nos conectamos a la base de datos y nos dara la informacion del lugar en especifico
    // en base en su slug
    try {
        const resultado = await Viaje.findOne({where : {slug : slug}});
        res.render('viaje', {
            pagina: "Informacion viaje",
            resultado
        })
    } catch (error){
        console.log(error)
    }
};


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaViajesDetalle

}
