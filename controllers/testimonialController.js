//importamos el modelo de testimonios
import {Testimonial} from '../models/Testimoniales.js'


const guardarTestimonial = async (req, res) =>{
    //validamos los campos
    const {nombre, correo, mensaje} = req.body;

    //validacion de los campos
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({
            mensaje : 'El campo de nombre no puede ir vacio'
        });
    };

    if(correo.trim() === ''){
        errores.push({
            mensaje : 'El campo de correo no puede ir vacio'
        });
    }
    if(mensaje.trim() === ''){
        errores.push({
            mensaje : 'El campo de mensaje no puede ir vacio'
        });
    }

    //Verificamos que haya al menor un error
    if(errores.length > 0){
        //consultar los testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina : "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //Almacenar el testimonial en la base de datos

        //accedemos a los metodos de los testimoniales
        try {
            await Testimonial.create({
                //Pasamos a la base de datos los datos que se insertaron en el formulario
                nombre,
                correo,
                mensaje
            })

            //redireccionar al usuario
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }

}

export {
    guardarTestimonial
}