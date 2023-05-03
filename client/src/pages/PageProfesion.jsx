import React from "react";
import { useEffect, useState } from "react";
import { getProfesiones } from "../api/profesion.api";
import ProfesionItem from "../components/ProfesionItem";

function PageProfesion() {
  const [profesiones, setProfesiones] = useState([]);

  useEffect(() => {
    async function CargaProfesiones() {
      const response = await getProfesiones();
      setProfesiones(response.data);
    }
    CargaProfesiones();
  }, []);

  function renderProfesiones() {
    if (profesiones.length === 0) {
      return <p>No hay profesiones</p>;
    }
    return profesiones.map((profesion) => <ProfesionItem key={profesion.id} profesion={profesion} />);
  }
  

  return (
    <>
      <h1>PageProfesion</h1>

      {renderProfesiones()}
    </>
  );
}

export default PageProfesion;
