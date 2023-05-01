import React from "react";

function ProfesionItem({profesion}) {
  return (
    <div key={profesion.id}>
      <h3>{profesion.profesion}</h3>
      <h3>{profesion.eliminado}</h3>
      <button>Eliminar</button>
      <button>Editar</button>
    </div>
  );
}

export default ProfesionItem;
