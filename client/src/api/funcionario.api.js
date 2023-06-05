import axios from "axios";

const getFuncionariosApi = async () => await axios.get("http://localhost:4000/funcionario");

const createFuncionarioApi = async (funcionario) => await axios.post("http://localhost:4000/funcionario", funcionario);

const deleteFuncionarioApi = async (id) => await axios.patch(`http://localhost:4000/funcionario/${id}`);

const getFuncionarioApi = async (id) => await axios.get(`http://localhost:4000/funcionario/${id}`);

const updateFuncionarioApi = async (id, newfuncionario) => await axios.put(`http://localhost:4000/funcionario/${id}`, newfuncionario);

export { createFuncionarioApi, getFuncionariosApi, deleteFuncionarioApi, getFuncionarioApi, updateFuncionarioApi };