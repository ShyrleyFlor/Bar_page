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
    RUC: "",
    fechaNac: "",
    direccion: "",
    barrioID: "",
    ciudadID: "",
    profesionID: "",
    telefono: "",
    deuda: "",
    funcionarioID: "",
    modificadoPor: "",
    ci: "",
    factura: "",
    mail: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCliente = async () => {
      if (params.id) {
        const cliente = await getCliente(params.id);
        const date = new Date(cliente.fechaNac);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${year}-${month
          .toString()
          .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

        setCliente({
          nombre: cliente.nombre,
          RUC: cliente.RUC,
          fechaNac: formattedDate,
          direccion: cliente.direccion,
          barrioID: cliente.barrioID,
          ciudadID: cliente.ciudadID,
          profesionID: cliente.profesionID,
          telefono: cliente.telefono,
          deuda: cliente.deuda,
          funcionarioID: cliente.funcionarioID,
          modificadoPor: cliente.modificadoPor,
          ci: cliente.ci,
          factura: cliente.factura,
          mail: cliente.mail,
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
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box borderRadius={5} m={2} padding={2} width="400px" bgcolor="#f6f5f5">
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
                RUC: "",
                fechaNac: "",
                direccion: "",
                barrioID: "",
                ciudadID: "",
                profesionID: "",
                funcionarioID: "",
                modificadoPor: "",
                ci: "",
                mail: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="text"
                  name="nombre"
                  placeholder="Escribe un Nombre"
                  onChange={handleChange}
                  value={values.nombre}
                />
                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="text"
                  name="RUC"
                  placeholder="Escribe un RUC"
                  onChange={handleChange}
                  value={values.RUC}
                />
                <Box mt={2} mb={2}>
                  <Input
                    inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                    style={{ margin: "75pxpx" }}
                    type="date"
                    name="fechaNac"
                    placeholder="Escribe una Fecha de Nacimiento"
                    onChange={handleChange}
                    value={values.fechaNac}
                  />
                </Box>
                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="text"
                  name="direccion"
                  placeholder="Escribe una Direccion"
                  onChange={handleChange}
                  value={values.direccion}
                />
                {/* --------------------------- barrio------------------------ */}
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
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="number"
                  name="telefono"
                  placeholder="Escribe un Telefono"
                  onChange={handleChange}
                  value={values.telefono}
                />

                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="number"
                  name="deuda"
                  placeholder="Escribe una Deuda"
                  onChange={handleChange}
                  value={values.deuda}
                />
                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="text"
                  name="ci"
                  placeholder="Escribe un CI"
                  onChange={handleChange}
                  value={values.ci}
                />

                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="text"
                  name="factura"
                  placeholder="Escribe una Factura"
                  onChange={handleChange}
                  value={values.factura}
                />

                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="text"
                  name="mail"
                  placeholder="Escribe un Email"
                  onChange={handleChange}
                  value={values.mail}
                />

                <Input
                  inputProps={{ style: { fontSize: "18px", width: "300px" } }}
                  style={{ margin: "5px" }}
                  type="number"
                  name="modificadoPor"
                  placeholder="Escribe un Modificado Por"
                  onChange={handleChange}
                  value={values.modificadoPor}
                />
                <Button
                  variant="contained"
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
      </Box>
    </Box>
  );
}
