import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useClientes } from "../context/ClienteContext";
import { TableCell, TableRow } from "@mui/material";

export default function ClienteItem({ cliente }) {
    const navigate = useNavigate();
    const { deleteCliente } = useClientes();

    return (
        <TableRow key={cliente.id}>
            <TableCell>{cliente.nombre}</TableCell>
            <TableCell>{cliente.RUC}</TableCell>
            <TableCell>{cliente.fechaNac}</TableCell>
            <TableCell>{cliente.direccion}</TableCell>
            <TableCell>{cliente.barrio}</TableCell>
            <TableCell>{cliente.ciudad}</TableCell>
            <TableCell>{cliente.profesion}</TableCell>
            <TableCell>{cliente.telefono}</TableCell>
            <TableCell>{cliente.deuda}</TableCell>
            <TableCell>{cliente.funcionario}</TableCell>
            <TableCell>{cliente.creadoFecha}</TableCell>
            <TableCell>{cliente.modificadoPor}</TableCell>
            <TableCell>{cliente.ci}</TableCell>
            <TableCell>{cliente.factura}</TableCell>
            <TableCell>{cliente.mail}</TableCell>
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
        </TableRow>
    )
}