import React from "react";
import { useEffect } from "react";
import CiudadItem from "../components/CiudadItem";
import { useCiudades } from "../context/CiudadContext";

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
    <>
      <h1>Ciudades</h1>
      {renderCiudad()}
    </>
  );
}
