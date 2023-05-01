import axios from "axios";

const getProfesiones = async () => await axios.get("http://localhost:4000/profesion");
  


const createProfesion = async (profesion) => {
  const response = await axios.post("http://localhost:4000/profesion", profesion);
  return response.data;
}

export { createProfesion, getProfesiones };