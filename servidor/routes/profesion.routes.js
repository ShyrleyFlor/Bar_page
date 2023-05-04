import { Router } from "express";
const router = Router();
//importamos las funciones creadas en el controlador
import {
    getProfesiones,
    getProfesion,
    createProfesion,
    updateProfesion,
    deleteProfesion
} from "../controllers/profesion.controller.js";

router.get("/profesion", getProfesiones);
router.get("/profesion/:id", getProfesion);

router.post("/profesion", createProfesion);
router.put("/profesion/:id", updateProfesion);

router.patch("/profesion/:id", deleteProfesion);

export default router;