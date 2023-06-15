import React from "react";
import { useNavigate } from "react-router-dom";
import { useFuncionarios } from "../context/FuncionarioContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TableCell, TableRow } from "@mui/material";


function FuncionarioItem({ funcionario }) {
    const { deleteFuncionario } = useFuncionarios();
    const navigate = useNavigate();

    const date = new Date(funcionario.fechaNac);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    return (
        <TableRow key={funcionario.id}>
            <TableCell>{funcionario.funcionario}</TableCell>
            <TableCell>{funcionario.salarioBase}</TableCell>
            <TableCell>{funcionario.ips}</TableCell>
            <TableCell>{funcionario.estado}</TableCell>
            <TableCell>{funcionario.telefono}</TableCell>
            <TableCell>{funcionario.direccion}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{funcionario.fechaCreacion}</TableCell>
            <TableCell>
            <Button
                    onClick={() => deleteFuncionario(funcionario.id)}
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                >
                    Eliminar
                </Button>
            </TableCell>
            <TableCell>
            <Button
                    onClick={() => navigate(`/funcionarios/${funcionario.id}`)}
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                >
                    Editar
                </Button>
            </TableCell>
               
                
            
        </TableRow>
    )
}

export default FuncionarioItem;