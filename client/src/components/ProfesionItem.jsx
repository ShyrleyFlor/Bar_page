import React from "react";
import { deleteProfesion } from "../api/profesion.api";
import { useProfesiones } from "../context/Context";

function ProfesionItem({profesion}) {

  const { deleteProfesion } = useProfesiones();





  return (
    <div>
      <h3>{profesion.profesion}</h3>
      <h3>{profesion.id}</h3>
      <button onClick={()=>deleteProfesion(profesion.id) }>Eliminar</button>
      <button>Editar</button>
    </div>
  );
}

export default ProfesionItem;
