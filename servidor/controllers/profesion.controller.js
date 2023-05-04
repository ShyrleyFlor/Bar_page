//importamos la base de datos
import { pool } from "../db.js";

// creamos la funcion de listar una sola profesion
export const getProfesion = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM profesion WHERE id = ?",
    [req.params.id]
  );
  //por si la profesion solicitada no existe
  if (result.length === 0)
    return res.status(404).json({ message: "Profesion no encontrada" });

  res.json(result[0]);
};

// creamos la funcion de listar todas las profesiones
export const getProfesiones = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM profesion where eliminado = 0"
  );

  res.json(result);
};

// creamos la funcion de crear una profesion
export const createProfesion = async (req, res) => {
  const { profesion } = req.body;
  const [result] = await pool.query(
    "INSERT INTO `profesion` (`profesion`,`eliminado`) VALUES (?,'0')",
    [profesion]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    profesion,
  });
};

// creamos la funcion de actualizar una profesion
export const updateProfesion = async (req, res) => {
  const [result] = await pool.query("UPDATE profesion SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
};

// creamos la funcion de eliminar una profesion
export const deleteProfesion = async (req, res) => {
  const [result] = await pool.query(
    //hacemos una actualizacion en nuestra variable eliminar la profesion
    //si eliminado es 0 entonces la profesion no fue eliminada
    //si es igual a 1 entonces la profesion fue eliminada
    "UPDATE `profesion` SET `eliminado`='1' WHERE id = ?",
    [req.params.id]
  );
  //por si lo que se desea eliminar no existe
  if (result.affectedRows === 0)
    return res.status(404).json({ message: "Profesion no encontrada" });
  //hacemos un select para saber el resultado de eliminado  
  //y este resultado lo guardamos en la variable compara  
  const compara = await pool.query(
    "SELECT `eliminado` FROM `profesion` WHERE id = ?",
    [req.params.id]
  );
  //por si la funcion ya fue eliminada
  if (compara && compara.length > 0) {
    const eliminado = compara[0].eliminado;

    return res.status(400).json({ message: "Profesion Eliminada" });
  }
};
