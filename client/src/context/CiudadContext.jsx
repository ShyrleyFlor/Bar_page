import { createContext, useContext, useState } from "react";
import {
  getCiudadApi,
  deleteCiudadApi,
  getCiudadesApi,
  updateCiudadApi,
  createCiudadApi,
} from "../api/ciudad.api";

export const CiudadContext = createContext();

export const useCiudades = () => {
  const context = useContext(CiudadContext);
  if (!context) {
    throw new Error("useCiudades must be used within a CiudadProvider");
  }
  return context;
};

export const CiudadContextProvider = ({ children }) => {
  const [ciudades, setCiudades] = useState([]);

  async function CargaCiudades() {
    const response = await getCiudadesApi();
    setCiudades(response.data);
  }

  const deleteCiudad = async (id) => {
    try {
      console.log(id);
      const res = await deleteCiudadApi(id);
      window.location.reload();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createCiudad = async (ciudad) => {
    try {
      await createCiudadApi(ciudad);
    } catch (error) {
      console.log(error);
    }
  };

  const getCiudad = async (id) => {
    try {
      const response = await getCiudadApi(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCiudad = async (id, newciudad) => {
    try {
      await updateCiudadApi(id, newciudad);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CiudadContext.Provider
      value={{
        ciudades,
        setCiudades,
        deleteCiudad,
        createCiudad,
        getCiudad,
        updateCiudad,
        CargaCiudades,
      }}
    >
      {children}
    </CiudadContext.Provider>
  );
};
