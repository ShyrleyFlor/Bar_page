import React from "react";
import { useNavigate } from "react-router-dom";
import { useCiudades } from "../context/CiudadContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function CiudadItem({ ciudad }) {
  const navigate = useNavigate();
  const { deleteCiudad } = useCiudades();

  return (
    <Box margin={2}>
      <h3>{ciudad.ciudad}</h3>
      <Stack spacing={2} direction="row">
        <Button
          onClick={() => deleteCiudad(ciudad.id)}
          variant="contained"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
        <Button
          onClick={() => navigate(`/ciudades/${ciudad.id}`)}
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
