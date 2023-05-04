import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useProfesiones } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <h1>{params.id ? "Editar Profesion" : "Crear Profesion"}</h1>
      <Formik
        //inicializa las variables
        initialValues={profesion}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProfesion(params.id, values);
            navigate("/profesiones");
            window.location.reload();
          }else{
            await createProfesion(values);
            navigate("/profesiones");
            window.location.reload();
          }
          setProfesion({
            profesion: "",
          })
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <label>profesion</label>
            <input
              type="text"
              name="profesion"
              placeholder="Escriba una profesion"
              onChange={handleChange}
              value={values.profesion}
            />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
