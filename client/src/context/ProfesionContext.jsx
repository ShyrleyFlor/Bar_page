import { createContext, useContext, useState } from "react";


import {
  getProfesionesApi,
  deleteProfesionApi,
  createProfesionApi,
  getProfesionApi,
  updateProfesionApi
} from "../api/profesion.api";

export const ProfesionContext = createContext();

export const useProfesiones = () => {
  const context = useContext(ProfesionContext);
  if (!context) {
    throw new Error("useProfesion must be used within a ProfesionProvider");
  }
  return context;
};

export const ProfesionContextProvider = ({ children }) => {
  const [profesiones, setProfesiones] = useState([]);

  async function CargaProfesiones() {
    const response = await getProfesionesApi();
    setProfesiones(response.data);
  }

  const deleteProfesion = async (id) => {
    try {
        console.log(id);

      const res = await deleteProfesionApi(id);
      //Para recargar las profesiones que se eliminaron
      //profesiones.filter((profesion) => profesion.id !== id);
      //en nuestro caso no se elimina la profesion sino se cambia el estado
      window.location.reload();
    //  setProfesiones(
    //profesiones.filter(profesion => profesion.eliminado !== '1'));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createProfesion = async (profesion) => {
    try {
      await createProfesionApi(profesion);
      //si se queres agregar una nueva profesion a la lista
      //setProfesiones([...profesiones, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getProfesion = async (id) => {
      try {
        const response =  await getProfesionApi(id);
        return response.data;
      } catch (error) {
          console.log(error);
      }
  }

  const updateProfesion = async (id, newprofesion) => {
    try {
        await updateProfesionApi(id, newprofesion);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProfesionContext.Provider
      value={{
        profesiones,
        setProfesiones,
        CargaProfesiones,
        deleteProfesion,
        createProfesion,
        getProfesion,
        updateProfesion
      }}
    >
      {children}
    </ProfesionContext.Provider>
  );
};