import React from "react";
import { useNavigate } from "react-router-dom";
import { useBarrios } from "../context/BarrioContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function BarrioItem({ barrio }) {
  const navigate = useNavigate();
  const { deleteBarrio } = useBarrios();

  return (
    <Box margin={2}>
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
