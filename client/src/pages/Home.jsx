import React from "react";
import Desplegable from "../components/Desplegable";
import { useEffect } from "react";
import { useProfesiones } from "../context/Context";

function Home() {
  const{profesiones,  CargaProfesiones} = useProfesiones();

  useEffect(() => {

    CargaProfesiones();
  }, []);

  function renderProfesiones() {
    if (profesiones.length === 0) {
      return <p>No hay profesiones</p>;
    }
    return profesiones.map((profesion) => <Desplegable key={profesion.id} profesion={profesion} />);
  }
  
  return (
    <div>
      <h1>Home</h1>
      <select>
     
      {renderProfesiones()}

      </select>
    </div>
  );
}

export default Home;