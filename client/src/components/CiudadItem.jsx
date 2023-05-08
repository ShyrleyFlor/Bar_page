import React from "react";
import { useNavigate } from "react-router-dom";
import { useCiudades } from "../context/CiudadContext";

export default function CiudadItem({ ciudad }) {
    const navigate = useNavigate();
    const { deleteCiudad } = useCiudades();

    return (
        <div>
            <h3>{ciudad.ciudad}</h3>
            <h3>{ciudad.id}</h3>
            <button onClick={() => deleteCiudad(ciudad.id)}>Eliminar</button>
            <button onClick={() => navigate(`/ciudades/${ciudad.id}`)}>Editar</button>
        </div>
    )
}