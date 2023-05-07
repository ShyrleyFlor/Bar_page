//importamos el objeto pool para crear una consulta
import { pool } from "../db.js";

export const getBarrios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM barrio ORDER BY id ASC");
       res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
};

// [req.params.id] es el id que le envia el cliente
export const getBarrio = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM barrio WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
};

//req.body es el dato que le envia el cliente
export const createBarrio = async (req, res) => {
 try {
  const { barrio } = req.body;
  const [result] = await pool.query(`INSERT INTO barrio (barrio,eliminado) VALUES (?,"0")`, [
    barrio,
  ]);
  res.json({
    id: result.insertId,
    barrio,
  });
 } catch (error) {
  return res.status(500).json({
    message: error.message,
  })
 }
};

export const updateBarrio = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE barrio SET barrio = ? WHERE id = ?", [req.body.barrio,req.params.id]
    )
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
};

//affectedRows affectedRows es lo que retorna al eliminar una tarea
// return res.sendStatus(204);
//
export const deleteBarrio = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = {eliminado: "1"}; 
    const [result] = await pool.query("UPDATE barrio SET ? WHERE id = ?", [
      newData, id
    ]);
    res.json(result);
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Barrio no encontrado"
      });
  } catch (error) {
    return res.status(500).json({
      message:" error.message",
    })
  }
};
//hacemos una actualizacion en nuestra variable eliminar la profesion 

//si eliminado es 0 entonces la profesion no fue eliminada 

//si es igual a 1 entonces la profesion fue eliminada 