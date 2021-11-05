//importamos sequelize
import Sequelize from 'sequelize';
//importamos la instancia de db
import db from '../config/db.js'

//definimos nuestro primer modelo
export const Testimonial = db.define('testimoniales', {
    //los datos tal cual como en nuestra base de datos
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }

});