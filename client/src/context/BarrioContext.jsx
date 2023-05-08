import { createContext, useContext, useState } from "react";
import {
  getBarriosApi,
  deleteBarrioApi,
  getBarrioApi,
  updateBarrioApi,
  createBarrioApi,
} from "../api/barrio.api";

export const BarrioContext = createContext();

export const useBarrios = () => {
  const context = useContext(BarrioContext);
  if (!context) {
    throw new Error("useBarrios must be used within a BarrioProvider");
  }
  return context;
};

export const BarrioContextProvider = ({ children }) => {
  const [barrios, setBarrios] = useState([]);

  async function CargaBarrios() {
    const response = await getBarriosApi();
    setBarrios(response.data);
  }

  const deleteBarrio = async (id) => {
    try {
      console.log(id);
      const res = await deleteBarrioApi(id);
      window.location.reload();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createBarrio = async (barrio) => {
    try {
      await createBarrioApi(barrio);
    } catch (error) {
      console.log(error);
    }
  };

  const getBarrio = async (id) => {
    try {
      const response = await getBarrioApi(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateBarrio = async (id, newbarrio) => {
    try {
      await updateBarrioApi(id, newbarrio);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BarrioContext.Provider
      value={{
        barrios,
        CargaBarrios,
        deleteBarrio,
        createBarrio,
        getBarrio,
        updateBarrio,
        CargaBarrios,
      }}
    >
      {children}
    </BarrioContext.Provider>
  );
};
