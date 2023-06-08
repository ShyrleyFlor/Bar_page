import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useClientes } from "../context/ClienteContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useBarrios } from "../context/BarrioContext";
import { useCiudades } from "../context/CiudadContext";
import { useProfesiones } from "../context/ProfesionContext";
import { useFuncionarios } from "../context/FuncionarioContext";

export default function ClienteForm() {
  const { createCliente, getCliente, updateCliente } = useClientes();
  const [cliente, setCliente] = useState({
    nombre: "",
    barrioID: "",
    ciudadID: "",
    profesionID: "",
    funcionarioID: "",
    modificadoPor: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCliente = async () => {
      if (params.id) {
        const cliente = await getCliente(params.id);
        setCliente({
          nombre: cliente.nombre,
          barrioID: cliente.barrioID,
          ciudadID: cliente.ciudadID,
          profesionID: cliente.profesionID,
          funcionarioID: cliente.funcionarioID,
          modificadoPor: cliente.modificadoPor,
        });
      }
    };
    loadCliente();
  }, []);

  //--------------------------
  const { barrios, CargaBarrios } = useBarrios();

  useEffect(() => {
    CargaBarrios();
  }, []);

  const { ciudades, CargaCiudades } = useCiudades();
  useEffect(() => {
    CargaCiudades();
  });

  const { profesiones, CargaProfesiones } = useProfesiones();
  useEffect(() => {
    CargaProfesiones();
  });

  const { funcionarios, CargaFuncionarios } = useFuncionarios();
  useEffect(() => {
    CargaFuncionarios();
  });
  //--------------------------

  return (
    <div>
      <h1>{params.id ? "Editar Cliente" : "Crear Cliente"}</h1>
      <Box display="flex" width={350} spacing={20} m={1} p={1}>
        <Formik
          spacing={20}
          display="flex"
          initialValues={cliente}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (params.id) {
              await updateCliente(params.id, values);
            } else {
              await createCliente(values);
            }
            navigate("/clientes");
            window.location.reload();
            setCliente({
              nombre: "",
              barrioID: "",
              ciudadID: "",
              profesionID: "",
              funcionarioID: "",
              modificadoPor: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="nombre"
                placeholder="Escribe un Nombre"
                onChange={handleChange}
                value={values.nombre}
              />
              {/*--------------------------- barrio------------------------ */}
              <Box mt={2} mb={2}>
                <FormControl sx={{ minWidth: 200 }} spacing={20}>
                  <InputLabel>Barrio</InputLabel>
                  <Select
                    name="barrioID"
                    onChange={handleChange}
                    value={values.barrioID}
                  >
                    <MenuItem value="" disabled>
                      Selecciona un barrio
                    </MenuItem>
                    {barrios.map((barrio) => (
                      <MenuItem key={barrio.id} value={barrio.id}>
                        {barrio.barrio}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/*--------------------------- ciudades------------------------ */}
              <Box mt={2} mb={2}>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel>Ciudad</InputLabel>
                  <Select
                    name="ciudadID"
                    onChange={handleChange}
                    value={values.ciudadID}
                  >
                    <MenuItem value="" disabled>
                      Selecciona una ciudad
                    </MenuItem>
                    {ciudades.map((ciudad) => (
                      <MenuItem key={ciudad.id} value={ciudad.id}>
                        {ciudad.ciudad}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {/*--------------------------- profesion------------------------ */}
              <Box mt={2} mb={2}>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Profesion</InputLabel>
                <Select
                  name="profesionID"
                  onChange={handleChange}
                  value={values.profesionID}
                >
                  <MenuItem value="" disabled>
                    Selecciona una profesion
                  </MenuItem>
                  {profesiones.map((profesion) => (
                    <MenuItem key={profesion.id} value={profesion.id}>
                      {profesion.profesion}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>

              {/*--------------------------- funcionario------------------------ */}
              <Box mt={2} mb={2}>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Funcionario</InputLabel>
                <Select
                  name="funcionarioID"
                  onChange={handleChange}
                  value={values.funcionarioID}
                >
                  <MenuItem value="" disabled>
                    Selecciona un funcionario
                  </MenuItem>
                  {funcionarios.map((funcionario) => (
                    <MenuItem key={funcionario.id} value={funcionario.id}>
                      {funcionario.funcionario}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>

              <Input
                type="text"
                name="modificadoPor"
                placeholder="Escribe un Modificado Por"
                onChange={handleChange}
                value={values.modificadoPor}
              />
              <Button
                endIcon={<SendIcon />}
                type="submit"
                onClick={() => console.log(values)}
              >
                Guardar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
}
