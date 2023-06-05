import React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import FuncionarioItem from "../components/FuncionarioItem";
import { useFuncionarios } from "../context/FuncionarioContext";

export default function PageFuncionario() {
    const { funcionarios, CargaFuncionarios } = useFuncionarios();
    useEffect(() => {
        CargaFuncionarios();
    }, []);

    function renderFuncionario() {
        if (funcionarios.length === 0) {
            return <p>No hay funcionarios</p>;
        }
        return funcionarios.map((funcionario) => (
            <FuncionarioItem key={funcionario.id} funcionario={funcionario} />
        ));
    }
    return (
        <>
            <h1>Funcionarios</h1>
            <Box mt={2}>{renderFuncionario()}</Box>
        </>
    )
}