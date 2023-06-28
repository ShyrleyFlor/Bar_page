import React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import FuncionarioItem from "../components/FuncionarioItem";
import { useFuncionarios } from "../context/FuncionarioContext";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";

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
      <Box display="flex" justifyContent="center" alignItems="center">
        <h1>Funcionarios</h1>
        <Box>
          <Button
            style={{ margin: "8px" }}
            href="/Funcionarios/new"
            sx={{ flexGrow: 1 }}
            variant="contained"
          >
            Crear
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper} overflow="hidden">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>funcionario</TableCell>
              <TableCell>salarioBase</TableCell>
              <TableCell>ips</TableCell>
              <TableCell>estado</TableCell>
              <TableCell>telefono</TableCell>
              <TableCell>direccion</TableCell>
              <TableCell>fechaNac</TableCell>
              <TableCell>fechaCreacion</TableCell>

              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderFuncionario()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
