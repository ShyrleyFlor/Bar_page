import React from "react";
import { useNavigate } from "react-router-dom";
import { useFuncionarios } from "../context/FuncionarioContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function FuncionarioItem({ funcionario }) {
    const { deleteFuncionario } = useFuncionarios();
    const navigate = useNavigate();

    const date = new Date(funcionario.fechaNac);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    return (
        <Box margin={2}>
            <h3>{funcionario.funcionario}</h3>
            <p>{funcionario.salarioBase}</p>
            <p>{funcionario.ips}</p>
            <p>{funcionario.estado}</p>
            <p>{funcionario.telefono}</p>
            <p>{funcionario.direccion}</p>
            <p>{formattedDate}</p>
            <p>{funcionario.fechaCreacion}</p>
            
            <Stack spacing={2} direction="row">
                <Button
                    onClick={() => deleteFuncionario(funcionario.id)}
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                >
                    Eliminar
                </Button>
                <Button
                    onClick={() => navigate(`/funcionarios/${funcionario.id}`)}
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

export default FuncionarioItem;