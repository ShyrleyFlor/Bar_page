import React from "react";
import { useEffect } from "react";
import ProfesionItem from "../components/ProfesionItem";
import { useProfesiones } from "../context/ProfesionContext";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function PageProfesion() {
  const { profesiones, CargaProfesiones } = useProfesiones();

  useEffect(() => {
    CargaProfesiones();
  }, []);

  function renderProfesiones() {
    if (profesiones.length === 0) {
      return <p>No hay profesiones</p>;
    }
    return profesiones.map((profesion) => (
      <ProfesionItem key={profesion.id} profesion={profesion} />
    ));
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h1>Profesiones</h1>
      <Button href='/Profesiones/new' sx={{ flexGrow: 1 }} variant="contained">Crear</Button>

      <Box mt={2}>{renderProfesiones()}</Box>
    </Box>
  );
}

export default PageProfesion;
