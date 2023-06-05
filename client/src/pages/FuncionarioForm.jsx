import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useFuncionarios } from "../context/FuncionarioContext";
import Stack from "@mui/material/Stack";

export default function FuncionarioForm() {
  const { createFuncionario, getFuncionario, updateFuncionario } =
    useFuncionarios();
  const [funcionario, setFuncionario] = useState({
    funcionario: "",
    salarioBase: "",
    ips: "",
    estado: "",
    telefono: "",
    direccion: "",
    fechaNac: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
      const loadFuncionario = async () => {
          if (params.id) {
              const funcionario = await getFuncionario(params.id);
              const date = new Date(funcionario.fechaNac);
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();
              const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        setFuncionario({
          funcionario: funcionario.funcionario,
          salarioBase: funcionario.salarioBase,
          ips: funcionario.ips,
          estado: funcionario.estado,
          telefono: funcionario.telefono,
          direccion: funcionario.direccion,
          fechaNac: formattedDate,
        });
      }
    };
    loadFuncionario();
  }, []);
  return (
    <div>
      <h1>{params.id ? "Editar Funcionario" : "Crear Funcionario"}</h1>
      <Stack
        margin={2}
        sx={{
          width: "35ch",
        }}
      >
        <Formik
          initialValues={funcionario}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (params.id) {
              await updateFuncionario(params.id, values);
            } else {
              await createFuncionario(values);
            }
            navigate("/funcionarios");
            window.location.reload();
            setFuncionario({
              funcionario: "",
              salarioBase: "",
              ips: "",
              estado: "",
              telefono: "",
              direccion: "",
              fechaNac: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="funcionario"
                placeholder="Escribe un Funcionario"
                onChange={handleChange}
                value={values.funcionario}
              />

              <Input
                type="text"
                name="salarioBase"
                placeholder="Escribe un Salario Base"
                onChange={handleChange}
                value={values.salarioBase}
              />

              <Input
                type="text"
                name="ips"
                placeholder="Escribe un IPS"
                onChange={handleChange}
                value={values.ips}
              />

              <Input
                type="text"
                name="estado"
                placeholder="Escribe un Estado"
                onChange={handleChange}
                value={values.estado}
              />

              <Input
                type="text"
                name="telefono"
                placeholder="Escribe un Telefono"
                onChange={handleChange}
                value={values.telefono}
              />

              <Input
                type="text"
                name="direccion"
                placeholder="Escribe una Direccion"
                onChange={handleChange}
                value={values.direccion}
              />

              <Input
                type="date"
                name="fechaNac"
                placeholder="Escribe una Fecha de Nacimiento"
                onChange={handleChange}
                value={values.fechaNac}
              />

              <Button endIcon={<SendIcon />} type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </Stack>
    </div>
  );
}
