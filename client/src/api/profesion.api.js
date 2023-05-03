import axios from "axios";

const getProfesiones = async () => await axios.get("http://localhost:4000/profesion");
  

const createProfesion = async (profesion) => await axios.post("http://localhost:4000/profesion", profesion);
  
const deleteProfesion = async (id) => await axios.delete(`http://localhost:4000/profesion/${id}`);


export { createProfesion, getProfesiones, deleteProfesion };