//importamos sequelize
import Sequelize from 'sequelize';
//importamos la instancia de db
import db from '../config/db.js'

//definimos nuestro primer modelo
export const Viaje = db.define('viajes', {
    //los datos tal cual como en nuestra base de datos
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.DATE
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }

})