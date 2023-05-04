import React from "react";
import { useProfesiones } from "../context/Context";
import { useNavigate } from "react-router-dom";

function ProfesionItem({profesion}) {

  const { deleteProfesion } = useProfesiones();
  const navigate = useNavigate();


  return (
    <div>
      <h3>{profesion.profesion}</h3>
      <h3>{profesion.id}</h3>
      <button onClick={()=>deleteProfesion(profesion.id) }>Eliminar</button>
      <button onClick={()=> navigate(`/profesiones/${profesion.id}`)} >Editar</button>
    </div>
  );
}

export default ProfesionItem;
