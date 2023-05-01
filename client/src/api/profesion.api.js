import axios from "axios";

const createProfesion = async (profesion) => {
  const response = await axios.post("http://localhost:4000/profesion", profesion);
  return response.data;
}

export { createProfesion };