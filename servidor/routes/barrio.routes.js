import {Router} from 'express';
const router = Router();
import {
    getBarrios,
    getBarrio,
    createBarrio,
    updateBarrio,
    deleteBarrio

} from '../controllers/barrio.controller.js';

//get es para obtener parametros
//post es para crear parametros
//put es para actualizar parametros
// patch es para actualizar lo que queremos eliminar
router.get('/barrio', getBarrios);

router.get('/barrio/:id', getBarrio);

router.post('/barrio', createBarrio);

router.put('/barrio/:id', updateBarrio);

router.patch('/barrio/:id', deleteBarrio);

export default router;
