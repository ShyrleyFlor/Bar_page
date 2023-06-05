import { createContext, useContext, useState } from "react";
import {
  getClientesApi,
  getClienteApi,
  createClienteApi,
  updateClienteApi,
  deleteClienteApi,
} from "../api/cliente.api";

export const ClienteContext = createContext();

export const useClientes = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error("useClientes must be used within a ClienteProvider");
  }
  return context;
};

export const ClienteContextProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  async function CargaClientes() {
    const response = await getClientesApi();
    setClientes(response.data);
  }

  const deleteCliente = async (id) => {
    try {
      console.log(id);
      const res = await deleteClienteApi(id);
      window.location.reload();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createCliente = async (cliente) => {
    try {
      await createClienteApi(cliente);
    } catch (error) {
      console.log(error);
    }
  };

  const getCliente = async (id) => {
    try {
      const response = await getClienteApi(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCliente = async (id, newcliente) => {
    try {
      await updateClienteApi(id, newcliente);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        clientes,
        CargaClientes,
        deleteCliente,
        createCliente,
        getCliente,
        updateCliente,
        setClientes,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
};
