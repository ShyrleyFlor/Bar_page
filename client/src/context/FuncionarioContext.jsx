import { createContext, useContext, useState } from "react";
import {
    getFuncionariosApi,
    deleteFuncionarioApi,
    getFuncionarioApi,
    updateFuncionarioApi,
    createFuncionarioApi,
} from "../api/funcionario.api";

export const FuncionarioContext = createContext();

export const useFuncionarios = () => {
    const context = useContext(FuncionarioContext);
    if (!context) {
        throw new Error("useFuncionarios must be used within a FuncionarioProvider");
    }
    return context;
};

export const FuncionarioContextProvider = ({ children }) => {

    const [funcionarios, setFuncionarios] = useState([]);

    async function CargaFuncionarios() {
        const response = await getFuncionariosApi();
        setFuncionarios(response.data);
    }

    const deleteFuncionario = async (id) => {
        try {
            console.log(id);
            const res = await deleteFuncionarioApi(id);
            window.location.reload();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const createFuncionario = async (funcionario) => {
        try {
            await createFuncionarioApi(funcionario);
        } catch (error) {
            console.log(error);
        }
    }

    const getFuncionario = async (id) => {
        try {
            const response = await getFuncionarioApi(id);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const updateFuncionario = async (id, newfuncionario) => {
        try {
            await updateFuncionarioApi(id, newfuncionario);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FuncionarioContext.Provider
            value={{
                funcionarios,
                CargaFuncionarios,
                deleteFuncionario,
                createFuncionario,
                getFuncionario,
                updateFuncionario,
                setFuncionarios,
            }}
            >
            {children}
            </FuncionarioContext.Provider>
    )
    
};