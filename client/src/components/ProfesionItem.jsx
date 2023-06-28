import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfesiones } from "../context/ProfesionContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function ProfesionItem({ profesion }) {
  const { deleteProfesion } = useProfesiones();
  const navigate = useNavigate();

  return (
    <Box  borderRadius={5} m= {2} padding={2} width="400px" bgcolor="#f6f5f5" >
      <h3>{profesion.profesion}</h3>
      <Stack spacing={2} direction="row">
        <Button
          onClick={() => deleteProfesion(profesion.id)}
          variant="contained"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
        <Button
          onClick={() => navigate(`/profesiones/${profesion.id}`)}
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

export default ProfesionItem;
