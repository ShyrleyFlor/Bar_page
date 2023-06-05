import React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import ClienteItem from "../components/ClienteItem";
import { useClientes } from "../context/ClienteContext";

export default function PageCliente() {
    const { clientes, CargaClientes } = useClientes();

    useEffect(() => {
        CargaClientes();
    }, []);

    function renderCliente() {
        if (clientes.length === 0) {
            return <p>No hay clientes</p>;
        }
        return clientes.map((cliente) => (
            <ClienteItem key={cliente.id} cliente={cliente} />
        ));
    }
    return (
        <>
        <h1>Clientes</h1>
        <Box mt={2}>{renderCliente()}</Box>
        </>
    )
}