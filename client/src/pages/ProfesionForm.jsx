import React from "react";
import { Form, Formik } from "formik";
import { createProfesion } from "../api/profesion.api";

export default function ProfesionForm() {
  return (
    <div>
      <Formik
        //inicializa las variables
        initialValues={{
          profesion: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createProfesion(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit,values }) => (
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
