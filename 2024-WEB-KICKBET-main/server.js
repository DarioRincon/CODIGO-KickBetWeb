const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Configura la conexión a MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Cambia esto
    password: 'tu_contraseña', // Cambia esto
    database: 'kickbet', //
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Ruta para guardar el pronóstico
app.post('/api/guardar-pronostico', async (req, res) => {
    const { partido, pronostico } = req.body;
    const [golesCasa, golesVisitante] = pronostico.split('-').map(Number);

    try {
        const [result] = await pool.query(
            `INSERT INTO predictions (match, predicted_score_home, predicted_score_away) VALUES (?, ?, ?)`,
            [partido, golesCasa, golesVisitante]
        );
        res.json({ message: 'Pronóstico guardado exitosamente', id: result.insertId });
    } catch (error) {
        console.error('Error al guardar el pronóstico:', error);
        res.status(500).json({ message: 'Error al guardar el pronóstico' });
    }
});

// Configura el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
