import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useBarrios } from "../context/BarrioContext";

export default function BarrioForm() {
  const { createBarrio, getBarrio, updateBarrio } = useBarrios();
  const [barrio, setBarrio] = useState({
    barrio: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadBarrio = async () => {
      if (params.id) {
        const barrio = await getBarrio(params.id);
        setBarrio({
          barrio: barrio.barrio,
        });
      }
    };
    loadBarrio();
  }, []);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box borderRadius={5} m={2} padding={2} width="400px" bgcolor="#f6f5f5">
        <h1>{params.id ? "Editar Barrio" : "Crear Barrio"}</h1>
        <Box margin={2}>
          <Formik
            initialValues={barrio}
            enableReinitialize={true}
            onSubmit={async (values) => {
              if (params.id) {
                await updateBarrio(params.id, values);
              } else {
                await createBarrio(values);
              }
              navigate("/barrios");
              window.location.reload();
              setBarrio({
                barrio: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "16px" }}
                  type="text"
                  name="barrio"
                  placeholder="Escribe un Barrio"
                  onChange={handleChange}
                  value={values.barrio}
                />
                <Button
                  endIcon={<SendIcon />}
                  type="submit"
                  variant="contained"
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
