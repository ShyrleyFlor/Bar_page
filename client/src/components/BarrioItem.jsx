import React from "react";
import { useNavigate } from "react-router-dom";
import { useBarrios } from "../context/BarrioContext";

export default function BarrioItem({ barrio }) {
    const navigate = useNavigate();
    const { deleteBarrio } = useBarrios();

    return (
        <div>
            <h3>{barrio.barrio}</h3>
            <h3>{barrio.id}</h3>
            <button onClick={() => deleteBarrio(barrio.id)}>Eliminar</button>
            <button onClick={() => navigate(`/barrios/${barrio.id}`)}>Editar</button>
        </div>
    )
}