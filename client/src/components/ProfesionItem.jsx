import React from "react";
import { deleteProfesion } from "../api/profesion.api";

function ProfesionItem({profesion}) {

  const handleDelete = async (id) => {
    try {
      const res = await deleteProfesion(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <h3>{profesion.profesion}</h3>
      <h3>{profesion.id}</h3>
      <button onClick={()=>handleDelete(profesion.id) }>Eliminar</button>
      <button>Editar</button>
    </div>
  );
}

export default ProfesionItem;
