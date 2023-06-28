import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useBarrios } from "../context/BarrioContext";
import { Paper } from "@mui/material";

export default function BarrioItem({ barrio }) {
  const navigate = useNavigate();
  const { deleteBarrio } = useBarrios();

  return (
    <Box  borderRadius={5} m= {2} padding={2} width="400px" bgcolor="#f6f5f5" >
      <h3>{barrio.barrio}</h3>
      <Stack spacing={2} direction="row">
        <Button
          onClick={() => deleteBarrio(barrio.id)}
          variant="contained"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
        <Button
          onClick={() => navigate(`/barrios/${barrio.id}`)}
          variant="contained"
          size="small"
          startIcon={<EditIcon />}
        >
          Editar
        </Button>
      </Stack>
    </Box>
  );
}
