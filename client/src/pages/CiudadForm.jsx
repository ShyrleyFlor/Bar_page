import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useCiudades } from "../context/CiudadContext";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export default function CiudadForm() {
  const { createCiudad, getCiudad, updateCiudad } = useCiudades();
  const [ciudad, setCiudad] = useState({
    ciudad: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCiudad = async () => {
      if (params.id) {
        const ciudad = await getCiudad(params.id);
        setCiudad({
          ciudad: ciudad.ciudad,
        });
      }
    };
    loadCiudad();
  }, []);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box borderRadius={5} m={2} padding={2} width="400px" bgcolor="#f6f5f5">
        <h1>{params.id ? "Editar Ciudad" : "Crear Ciudad"}</h1>
        <Box margin={2}>
          <Formik
            initialValues={ciudad}
            enableReinitialize={true}
            onSubmit={async (values) => {
              if (params.id) {
                await updateCiudad(params.id, values);
              } else {
                await createCiudad(values);
              }
              navigate("/ciudades");
              window.location.reload();
              setCiudad({
                ciudad: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "16px" }}
                  type="text"
                  name="ciudad"
                  placeholder="Escribe una Ciudad"
                  onChange={handleChange}
                  value={values.ciudad}
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  Guardar
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}
