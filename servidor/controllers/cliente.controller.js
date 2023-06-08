import {pool}  from "../db.js";

export const getClientes = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT c.id, c.nombre, c.RUC, c.fechaNac, c.direccion, b.barrio, ciu.ciudad, p.profesion, c.telefono, c.deuda, f.funcionario, c.creadoFecha, fs.funcionario AS modificadoPor, c.ci, c.factura, c.mail FROM clientes c JOIN ciudad ciu ON ciu.id = c.ciudadID JOIN barrio b ON b.id = c.barrioID JOIN profesion p ON p.id = c.profesionID LEFT JOIN funcionarios AS f ON f.id = c.funcionarioID LEFT JOIN funcionarios AS fs ON fs.id = c.modificadoPor WHERE c.Eliminado = 0;"
        );
        res.json(result);
        } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
        }
}

export const getCliente = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT c.id, c.nombre, c.RUC, c.fechaNac, c.direccion, b.barrio, ciu.ciudad, p.profesion, c.telefono, c.deuda, f.funcionario, c.creadoFecha, fs.funcionario AS modificadoPor, c.ci, c.factura, c.mail FROM clientes c JOIN ciudad ciu ON ciu.id = c.ciudadID JOIN barrio b ON b.id = c.barrioID JOIN profesion p ON p.id = c.profesionID LEFT JOIN funcionarios AS f ON f.id = c.funcionarioID LEFT JOIN funcionarios AS fs ON fs.id = c.modificadoPor WHERE c.id = ?",
          [req.params.id]
        );
        if (result.length === 0) {
            return res.status(404).json({
            msg: "Cliente no encontrada",
            });
        }
        res.json(result[0]);
        } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
        }
}

export const createCliente = async (req, res) => {
    try{
        const{nombre, RUC, fechaNac, direccion, barrioID, ciudadID, profesionID, telefono, deuda, funcionarioID, modificadoPor, ci, factura, mail} = req.body;
        const [result] = await pool.query(
            "INSERT INTO `clientes` (`nombre`,`RUC`,`fechaNac`,`direccion`,`barrioID`,`ciudadID`,`profesionID`,`telefono`,`deuda`,`funcionarioID`,`modificadoPor`,`ci`,`factura`,`mail`,`eliminado` ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,'0')",
            [nombre, RUC, fechaNac, direccion, barrioID, ciudadID, profesionID, telefono, deuda, funcionarioID, modificadoPor, ci, factura, mail]
        )
        res.json({
            id: result.insertId,
            nombre,
            RUC,
            fechaNac,
            direccion,
            barrioID,
            ciudadID,
            profesionID,
            telefono,
            deuda,
            funcionarioID,
            modificadoPor,
            ci,
            factura,
            mail
        });


    }catch(error){
        return res.status(500).json({
            message: error.message,
        });
    }
    
}

export const updateCliente = async (req, res) => {
  const result = await pool.query(
    "UPDATE clientes SET ? WHERE id = ?",
    [req.body, req.params.id]
  );
  res.json(result);
    
}

export const deleteCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = { eliminado: '1'};
        const [result] = await pool.query("UPDATE clientes SET ? WHERE id = ?", [ newData, id ]);
        res.json(result);
        
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}


