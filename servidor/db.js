//importamos lo necesario para la conexion a la base de datos en este caso mysql2
import { createPool } from "mysql2/promise";

//exportamos la conexion de la base de datos
export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'bd_bar'
});