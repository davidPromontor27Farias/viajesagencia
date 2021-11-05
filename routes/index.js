import express from 'express'
//importando el controller
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaViajesDetalle} from '../controllers/paginasControllers.js'
import {guardarTestimonial} from '../controllers/testimonialController.js'

const router = express.Router();


router.get('/inicio', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes:slug', paginaViajesDetalle);


router.get('/testimoniales', paginaTestimoniales); 
//Se ejecutara cuando enviemos datos del formulario por metodo post
router.post('/testimoniales', guardarTestimonial);


export default router;