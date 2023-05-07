//importamos base de datos
import { pool } from "../db.js";

//Creamos funciones para las operaciones CRUD

//getCiudad para obtener una ciudad 
//try catch para manejar errores y evitar que el servidor se detenga
export const getCiudad = async (req, res) => {
    try {
      const [result] = await pool.query("SELECT * FROM ciudad WHERE id = ?", 
        [req.params.id,]
    );
    //condicional si no encuentra la ciudad en la base de datos devuelve un mensaje
    if (result.length === 0) {
        return res.status(404).json({
        msg: "Ciudad no encontrada",
        });
    }
    res.json(result[0]);
    } catch (error) {
    return res.status(500).json({
        message: error.message,
    });
    }
};

//getCiudades para obtener todas las ciudades
export const getCiudades = async (req, res) => {
    try {
    const [result] = await pool.query(
      "SELECT * FROM ciudad where eliminado = 0"
    );
    res.json(result);
    } catch (error) {
    return res.status(500).json({
        message: error.message,
    });
    }
};

//createCiudad para crear una ciudad
export const createCiudad = async (req, res) => {
    try {
    const {ciudad} = req.body;
    const [result] = await pool.query(
        "INSERT INTO `ciudad` (`ciudad`,`eliminado`) VALUES (?,'0')",
        [ciudad]    
    );
    res.json({
        id: result.insertId,
        ciudad,
    });
    } catch (error) {
    return res.status(500).json({
        message: error.message,
    });
    }
};

//updateCiudad para actualizar una ciudad 
export const updateCiudad = async (req, res) => {
    const [result] = await pool.query("UPDATE ciudad SET ? WHERE id = ?", [
        req.body,
        req.params.id,
    ]);
    res.json(result);
};

//deleteCiudad para eliminar una ciudad (queda ocultada como eliminado = 1 en la base de datos)
export const deleteCiudad = async (req, res) => {
    try {
    const id =req.params.id;
    const newData = {eliminado: '1'};
    const [result] = await pool.query(" UPDATE `ciudad` SET ? WHERE id = ?", 
        [newData,id]
    );
    //condicional si no encuentra la ciudad en la base de datos devuelve un mensaje
        if (result.affectedRows === 0) {
            return res.status(404).json({
        msg: "Ciudad no encontrada",
        });
        }
    return res.sendStatus(204);
    } catch (error) {
    return res.status(500).json({
        message: error.message,
    });
    }
};