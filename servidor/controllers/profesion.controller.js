//importamos la base de datos
import { pool } from "../db.js";

export const getProfesion = async (req, res) => {
  const [result] = await pool.query(
    "SELECT profesion FROM profesion WHERE id = ?",
    [req.params.id]
  );
  if (result.length === 0)
    return res.status(404).json({ message: "Profesion no encontrada" });

  res.json(result[0]);
};

export const getProfesiones = async (req, res) => {
  const [result] = await pool.query(
    "SELECT profesion FROM profesion ORDER BY id Asc"
  );

  res.json(result);
};

export const createProfesion = async (req, res) => {
  const { profesion } = req.body;
  const [result] = await pool.query(
    "INSERT INTO profesion(profesion) VALUES (?)",
    [profesion]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    profesion,
  });
};

export const updateProfesion = async (req, res) => {
  const [result] = await pool.query("UPDATE profesion SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
};

export const deleteProfesion = async (req, res) => {
  const [result] = await pool.query(
    "UPDATE `profesion` SET `eliminado`='1' WHERE id = ?",
    [req.params.id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({ message: "Profesion no encontrada" });
  const compara = await pool.query(
    "SELECT `eliminado` FROM `profesion` WHERE id = ?",
    [req.params.id]
  );

  if (compara && compara.length > 0) {
    const eliminado = compara[0].eliminado;

    return res.status(400).json({ message: "Profesion Eliminada" });
  }
};
