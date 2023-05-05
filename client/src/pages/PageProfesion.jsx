import React from "react";
import { useEffect } from "react";
import ProfesionItem from "../components/ProfesionItem";
import { useProfesiones } from "../context/Context";

function PageProfesion() {
  const{profesiones, CargaProfesiones} = useProfesiones();

  useEffect(() => {

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
