import { Router } from "express";
const router = Router();
import {
    getClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
} from "../controllers/cliente.controller.js";

router.get("/cliente", getClientes);
router.get("/cliente/:id", getCliente);
router.post("/cliente", createCliente);
router.put("/cliente/:id", updateCliente);
router.patch("/cliente/:id", deleteCliente);

export default router;