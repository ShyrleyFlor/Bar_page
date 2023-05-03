import { createContext, useContext, useState } from "react";
import { getProfesiones, deleteProfesion, createProfesion } from "../api/profesion.api";

export const Context = createContext();

export const useProfesiones = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useProfesion must be used within a ProfesionProvider");
  }
  return context;
};

export const ProfesionContextProvider = ({ children }) => {


  const [profesiones, setProfesiones] = useState([]);

  async function CargaProfesiones() {
    const response = await getProfesiones();
    setProfesiones(response.data);
  }

  const DeleteProfesion = async (id) => {
    try {
        const res = await deleteProfesion(id);
      //Para recargar las profesiones que se eliminaron 
      //profesiones.filter((profesion) => profesion.id !== id);
      //en nuestro caso no se elimina la profesion sino se cambia el estado
      console.log(1);

      setProfesiones( profesiones.filter(profesion => profesion.eliminado !=="0"));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const createProfesionn = async (profesion) => {
      
    try {
         await createProfesion(profesion);
        //si se queres agregar una nueva profesion a la lista
        //setProfesiones([...profesiones, response.data]);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <Context.Provider value={{ profesiones, setProfesiones, CargaProfesiones,deleteProfesion, createProfesionn }}>
      {children}
    </Context.Provider>
  );
};

