//importamos de express el modulo router para luego poder usarlo para el direccionamiento
import {Router} from 'express';
//importamos la conexion a la base de datos
import {pool} from '../db.js';

const router = Router();

//creamos una ruta en la cual estaremos viendo si funciona la conexion
router.get('/ping', async (req, res) => {
   const [rows] = await pool.query('SELECT 1 + 1 AS result')
   console.log(rows[0]);
   res.json(rows[0]);
})

//exportamos el router
export default router
