import { pool } from "../db.js";

export const getFuncionario = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM funcionarios where id = ?",
          [req.params.id]
        );
        if (result.length === 0) {
            return res.status(404).json({
            msg: "Funcionario no encontrada",
            });
        }
         
        
        res.json(result[0]);
        } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
        }
}
export const getFuncionarios = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM funcionarios where eliminado = 0"
        );
        if (result.length === 0) {
            return res.status(404).json({
            msg: "Funcionario no encontrada",
            });
        }
        res.json(result[0]);
        } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
        }
}

export const createFuncionario = async (req, res) => {
    try{
        const{salarioBase, ips, estado, telefono, direccion, fechaNac, funcionario} = req.body;
        const [result] = await pool.query(
            "INSERT INTO `funcionarios` (`salarioBase`,`ips`,`estado`,`telefono`,`direccion`,`fechaNac`,`eliminado`,`funcionario`) VALUES (?,?,?,?,?,?,'0',?)",
            [salarioBase, ips, estado, telefono, direccion, fechaNac, funcionario]
        )
        res.json({
            id: result.insertId,
            salarioBase,
            ips,
            estado,
            telefono,
            direccion,
            fechaNac,
            funcionario
        });

    }catch(error){
        return res.status(500).json({
            message: error.message,
        });
    }
}

export const updateFuncionario = async (req, res) => {
    const [result] = await pool.query("UPDATE funcionarios SET ? WHERE id = ?", [
        req.body,
        req.params.id,
    ]);
    res.json(result);
    
}

export const deleteFuncionario = async (req, res) => {
    try{
        const id = req.params.id;
        const newData = {eliminado: '1'};
        const [result] = await pool.query(
            "UPDATE `funcionarios` SET ? WHERE id = ?", [newData, id]
        )
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message,
        });
    }
}

