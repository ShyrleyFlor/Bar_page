import React from "react";
import { useEffect } from "react";
import ClienteItem from "../components/ClienteItem";

import { useClientes } from "../context/ClienteContext";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import Paper from "@mui/material/Paper";

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
      <Box display="flex" justifyContent="center" alignItems="center">
        <h1>Clientes</h1>
        <Box>
          <Button
            style={{ margin: "8px" }}
            href="/Clientes/new"
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
              <TableCell>Nombre</TableCell>
              <TableCell>RUC</TableCell>
              <TableCell>Fecha de nacimiento</TableCell>
              <TableCell>Direccion</TableCell>
              <TableCell>Barrio</TableCell>
              <TableCell>Ciudad</TableCell>
              <TableCell>Profesion</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell>Deuda</TableCell>
              <TableCell>Funcionario</TableCell>
              <TableCell>Fecha de creación</TableCell>
              <TableCell>Modificado por</TableCell>
              <TableCell>CI</TableCell>
              <TableCell>Factura</TableCell>
              <TableCell>Mail</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderCliente()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
