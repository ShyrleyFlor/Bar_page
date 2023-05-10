import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useBarrios } from "../context/BarrioContext";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";


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
    <div>
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
                type="text"
                name="barrio"
                placeholder="Escribe un Barrio"
                onChange={handleChange}
                value={values.barrio}
              />
              <Button endIcon={<SendIcon />} type="submit">
                Guardar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
}
