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
      console.log(response);
    }
    CargaProfesiones();
  }, []);

  return (
    <>
      <h1>PageProfesion</h1>

      {profesiones.map(profesion => (
        <ProfesionItem key={profesion.id} profesion={profesion} />
      ))}
    </>
  );
}

export default PageProfesion;
