import React from "react";
import { useEffect } from "react";
import BarrioItem from "../components/BarrioItem";
import { useBarrios } from "../context/BarrioContext";
import Box from "@mui/material/Box";


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
    <>
      <h1>Barrios</h1>
      <Box mt={2}>{renderBarrio()}</Box>
    </>
  );
}
