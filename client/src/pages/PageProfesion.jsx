import React from "react";
import { useEffect } from "react";
import ProfesionItem from "../components/ProfesionItem";
import { useProfesiones } from "../context/ProfesionContext";
import Box from "@mui/material/Box";

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
    <>
      <h1>Profesiones</h1>
      <Box mt={2}>{renderProfesiones()}</Box>
    </>
  );
}

export default PageProfesion;
