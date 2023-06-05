import { ProfesionContextProvider } from "../context/ProfesionContext";
import { CiudadContextProvider } from "../context/CiudadContext";
import { BarrioContextProvider } from "../context/BarrioContext";
import { FuncionarioContextProvider } from "./FuncionarioContext";
import { createContext } from "react";

export const Context = createContext();

export const use = () => {
  const context = use(Context);
  if (!context) {
    throw new Error("use must be used within a ContextProvider");
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  return (
    <FuncionarioContextProvider>
      <ProfesionContextProvider>
        <CiudadContextProvider>
          <BarrioContextProvider>{children}</BarrioContextProvider>
        </CiudadContextProvider>
      </ProfesionContextProvider>
    </FuncionarioContextProvider>
  );
};
