import axios from "axios";

const getProfesionesApi = async () => await axios.get("http://localhost:4000/profesion");
  

const createProfesionApi = async (profesion) => await axios.post("http://localhost:4000/profesion", profesion);
  
const deleteProfesionApi = async (id) => await axios.delete(`http://localhost:4000/profesion/${id}`);

const getProfesionApi = async (id) => await axios.get(`http://localhost:4000/profesion/${id}`);

const updateProfesionApi = async (id, newprofesion) => await axios.put(`http://localhost:4000/profesion/${id}`, newprofesion);


export { createProfesionApi, getProfesionesApi, deleteProfesionApi, getProfesionApi, updateProfesionApi };