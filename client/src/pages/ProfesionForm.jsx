import React from "react";
import { Form, Formik } from "formik";
import { useProfesiones } from "../context/Context";


export default function ProfesionForm() {

  const { createProfesionn } = useProfesiones();
  return (
    <div>
      <Formik
        //inicializa las variables
        initialValues={{
          profesion: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          await createProfesionn(values);
          actions.resetForm();

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
