import React from "react";
import { useEffect } from "react";
import CiudadItem from "../components/CiudadItem";
import { useCiudades } from "../context/CiudadContext";
import { Box, Button } from "@mui/material";

export default function PageCiudad() {
  const { ciudades, CargaCiudades } = useCiudades();

  useEffect(() => {
    CargaCiudades();
  }, []);

  function renderCiudad() {
    if (ciudades.length === 0) {
      return <p>No hay ciudades</p>;
    }
    return ciudades.map((ciudad) => (
      <CiudadItem key={ciudad.id} ciudad={ciudad} />
    ));
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h1>Ciudades</h1>
      <Button href='/Ciudades/new' sx={{ flexGrow: 1 }} variant="contained">Crear</Button>

      <Box>{renderCiudad()}</Box>
    </Box>
  );
}
