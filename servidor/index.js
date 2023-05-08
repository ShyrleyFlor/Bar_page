//importamos express para luego poder usarlo
import express from 'express';
//importamos el cors instalado
import cors from 'cors';
//importamos el puerto del proyecto config que creamos previamente
import { PORT } from './config.js';
//importamos las rutas
import indexRoutes from './routes/index.routes.js';
import profesionRoutes from './routes/profesion.routes.js';
import barrioRoutes from './routes/barrio.routes.js';
import ciudadRoutes from './routes/ciudad.routes.js';

const app = express();

//el cors es para que otros puertos se puedan conectar
app.use(cors());
app.use(express.json());

//usamos la ruta que importamos
app.use(indexRoutes);
app.use(profesionRoutes);
app.use(barrioRoutes);
app.use(ciudadRoutes);

//escuchamos el puerto y mandamos un mensaje de donde lo estamos escuchando
app.listen(PORT);
console.log(`Servidor escuchando en el puerto ${PORT}`);	