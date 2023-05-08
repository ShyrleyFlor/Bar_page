import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useCiudades } from "../context/CiudadContext";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <h1>{params.id ? "Editar Ciudad" : "Crear Ciudad"}</h1>
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
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              placeholder="Escribe el nombre de la Ciudad"
              onChange={handleChange}
              value={values.ciudad}
            />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
