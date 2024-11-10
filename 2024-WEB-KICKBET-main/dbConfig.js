// dbConfig.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // Cambia a tu host de MySQL
    user: 'tu_usuario', // Tu usuario de MySQL
    password: 'tu_contraseña', // Tu contraseña de MySQL
    database: 'betking' // Nombre de la base de datos
});

module.exports = pool.promise();
