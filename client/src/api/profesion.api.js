import axios from "axios";

const getProfesiones = async () => {
  const response = await axios.get("http://localhost:4000/profesion");
  return response;
}

const createProfesion = async (profesion) => {
  const response = await axios.post("http://localhost:4000/profesion", profesion);
  return response.data;
}

export { createProfesion, getProfesiones };