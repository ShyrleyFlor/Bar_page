import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useClientes } from "../context/ClienteContext";
import { TableCell, TableRow } from "@mui/material";

export default function ClienteItem({ cliente }) {
  const navigate = useNavigate();
  const { deleteCliente } = useClientes();
  const date = new Date(cliente.fechaNac);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
    const date2 = new Date(cliente.creadoFecha);
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth() + 1;
    const day2 = date2.getDate();
    const formattedDate2 = `${year2}-${month2.toString().padStart(2, "0")}-${day2.toString().padStart(2, "0")}`;

  return (
    <TableRow key={cliente.id}>
      <TableCell>{cliente.nombre}</TableCell>
      <TableCell>{cliente.RUC}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>{cliente.direccion}</TableCell>
      <TableCell>{cliente.barrio}</TableCell>
      <TableCell>{cliente.ciudad}</TableCell>
      <TableCell>{cliente.profesion}</TableCell>
      <TableCell>{cliente.telefono}</TableCell>
      <TableCell>{cliente.deuda}</TableCell>
      <TableCell>{cliente.funcionario}</TableCell>
      <TableCell>{formattedDate2}</TableCell>
      <TableCell>{cliente.modificadoPor}</TableCell>
      <TableCell>{cliente.ci}</TableCell>
      <TableCell>{cliente.factura}</TableCell>
      <TableCell>{cliente.mail}</TableCell>
      <TableCell>
        <Button
          onClick={() => deleteCliente(cliente.id)}
          variant="contained"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => navigate(`/clientes/${cliente.id}`)}
          variant="contained"
          size="small"
          startIcon={<EditIcon />}
        >
          Editar
        </Button>
      </TableCell>
    </TableRow>
  );
}
