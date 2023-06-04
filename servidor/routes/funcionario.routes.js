import { Router } from "express";
const router = Router();

import{
    getFuncionario,
    getFuncionarios,
    createFuncionario,
    updateFuncionario,
    deleteFuncionario
} from "../controllers/funcionario.controller.js";

router.get("/funcionario/:id", getFuncionario);
router.get("/funcionario", getFuncionarios);
router.post("/funcionario", createFuncionario);
router.put("/funcionario/:id", updateFuncionario);
router.patch("/funcionario/:id", deleteFuncionario);

export default router;
