import axios from "axios";

const getClientesApi = async () => await axios.get("http://localhost:4000/cliente");

const getClienteApi = async (id) => await axios.get(`http://localhost:4000/cliente/${id}`);

const createClienteApi = async (cliente) => await axios.post("http://localhost:4000/cliente", cliente);

const updateClienteApi = async (id, newcliente) => await axios.put(`http://localhost:4000/cliente/${id}`, newcliente);

const deleteClienteApi = async (id) => await axios.patch(`http://localhost:4000/cliente/${id}`);

export { getClientesApi, getClienteApi, createClienteApi, updateClienteApi, deleteClienteApi };