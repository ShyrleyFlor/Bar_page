import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useProfesiones } from "../context/ProfesionContext";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export default function ProfesionForm() {
  const { createProfesion, getProfesion, updateProfesion } = useProfesiones();
  const [profesion, setProfesion] = useState({
    profesion: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfesion = async () => {
      if (params.id) {
        const profesion = await getProfesion(params.id);
        setProfesion({
          profesion: profesion.profesion,
        });
      }
    };
    loadProfesion();
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
    <Box borderRadius={5} m= {2} padding={2} width="400px" bgcolor="#f6f5f5"  >
      
      <h1>{params.id ? "Editar Profesion" : "Crear Profesion"}</h1>
      <Box margin={2}>
        <Formik
          //inicializa las variables
          initialValues={profesion}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
            if (params.id) {
              await updateProfesion(params.id, values);
            } else {
              await createProfesion(values);
            }
            navigate("/profesiones");
            window.location.reload();
            setProfesion({
              profesion: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Input
              inputProps={{ style: { fontSize: "18px", width: "300px" } }}
              style={{ margin: "16px" }}
                type="text"
                name="profesion"
                placeholder="Escriba una Profesion"
                onChange={handleChange}
                value={values.profesion}
              />

              <Button variant="contained"endIcon={<SendIcon />} type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
    </Box>
  );
}
