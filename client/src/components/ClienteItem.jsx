import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useClientes } from "../context/ClienteContext";

export default function ClienteItem({ cliente }) {
    const navigate = useNavigate();
    const { deleteCliente } = useClientes();

    return (
        <Box margin={2}>
            <h3>{cliente.nombre}</h3>
            <p>{cliente.RUC}</p>
            <p>{cliente.fechaNac}</p>
            <p>{cliente.direccion}</p>
            <p>{cliente.barrio}</p>
            <p>{cliente.ciudad}</p>
            <p>{cliente.profesion}</p>
            <p>{cliente.telefono}</p>
            <p>{cliente.deuda}</p>
            <p>{cliente.funcionario}</p>
            <p>{cliente.creadoFecha}</p>
            <p>{cliente.modificadoPor}</p>
            <p>{cliente.ci}</p>
            <p>{cliente.factura}</p>
            <p>{cliente.mail}</p>
            <Stack spacing={2} direction="row">
                <Button
                    onClick={() => deleteCliente(cliente.id)}
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                >
                    Eliminar
                </Button>
                <Button
                    onClick={() => navigate(`/clientes/${cliente.id}`)}
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                >
                    Editar
                </Button>
            </Stack>
        </Box>
    )
}