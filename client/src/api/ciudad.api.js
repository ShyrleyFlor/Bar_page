import axios from "axios";

const getCiudadesApi = async () => await axios.get("http://localhost:4000/ciudad");
  

const createCiudadApi = async (ciudad) => await axios.post("http://localhost:4000/ciudad", ciudad);
  
const deleteCiudadApi = async (id) => await axios.patch(`http://localhost:4000/ciudad/${id}`);

const getCiudadApi = async (id) => await axios.get(`http://localhost:4000/ciudad/${id}`);

const updateCiudadApi = async (id, newciudad) => await axios.put(`http://localhost:4000/ciudad/${id}`, newciudad);


export { createCiudadApi, getCiudadesApi, deleteCiudadApi, getCiudadApi, updateCiudadApi };
