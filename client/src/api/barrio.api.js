import axios from "axios";

const getBarriosApi = async () => await axios.get("http://localhost:4000/barrio");

const createBarrioApi = async (barrio) => await axios.post("http://localhost:4000/barrio", barrio);
  
const deleteBarrioApi = async (id) => await axios.patch(`http://localhost:4000/barrio/${id}`);

const getBarrioApi = async (id) => await axios.get(`http://localhost:4000/barrio/${id}`);

const updateBarrioApi = async (id, newbarrio) => await axios.put(`http://localhost:4000/barrio/${id}`, newbarrio);


export { createBarrioApi, getBarriosApi, deleteBarrioApi, getBarrioApi, updateBarrioApi };