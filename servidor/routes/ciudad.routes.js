//importamos {Router} de express es para crear rutas
import { Router } from "express";
const router = Router();

//importamos funciones creada en server/controllers/ciudad.Controller.js
import {
    getCiudades,
    getCiudad,
    createCiudad,
    updateCiudad,
    deleteCiudad
} from "../controllers/ciudad.controller.js";
    router.get("/ciudades", getCiudades);  
    router.get("/ciudad/:id", getCiudad);
    router.post("/ciudad", createCiudad);
    router.put("/ciudad/:id", updateCiudad);
    router.patch("/ciudad/:id", deleteCiudad);
//exportamos la ruta
export default router;
