import React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BarrioItem from "../components/BarrioItem";
import { useBarrios } from "../context/BarrioContext";
import { Button } from "@mui/material";

export default function PageBarrio() {
  const { barrios, CargaBarrios } = useBarrios();

  useEffect(() => {
    CargaBarrios();
  }, []);

  function renderBarrio() {
    if (barrios.length === 0) {
      return <p>No hay barrios</p>;
    }
    return barrios.map((barrio) => (
      <BarrioItem key={barrio.id} barrio={barrio} />
    ));
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      
        <h1>Barrios</h1>
        <Button href='/Barrios/new' sx={{ flexGrow: 1 }} variant="contained">Crear</Button>
      
      <Box>{renderBarrio()}</Box>
    </Box>
  );
}
