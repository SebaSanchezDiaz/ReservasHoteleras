// src/index.js
const express = require('express');
const connectDB = require('./config/db');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
const port = 3000;

// Cargar variables de entorno
require('dotenv').config();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas definidas para las reservas
app.use('/api', reservaRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

