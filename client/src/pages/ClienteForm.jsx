import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useClientes } from "../context/ClienteContext";

export default function ClienteForm() {
    const { createCliente, getCliente, updateCliente } = useClientes();
    const [cliente, setCliente] = useState({
        cliente: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadCliente = async () => {
            if (params.id) {
                const cliente = await getCliente(params.id);
                setCliente({
                    cliente: cliente.cliente,
                });
            }
        };
        loadCliente();
    }, []);

    return (
        <div>
            <h1>{params.id ? "Editar Cliente" : "Crear Cliente"}</h1>
            <Box margin={2}>
                <Formik
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
                            cliente: "",
                        });
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="cliente"
                                placeholder="Escribe un Cliente"
                                onChange={handleChange}
                                value={values.cliente}
                            />
                            <Button endIcon={<SendIcon />} type="submit">
                                Enviar
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </div>
    )
}