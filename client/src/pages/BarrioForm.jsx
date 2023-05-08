import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useBarrios } from "../context/BarrioContext";
import { useParams, useNavigate } from "react-router-dom";

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
            <label htmlFor="barrio">Barrio</label>
            <input
              type="text"
              name="barrio"
              placeholder="Escribe el nombre del Barrio"
              onChange={handleChange}
              value={values.barrio}
            />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
