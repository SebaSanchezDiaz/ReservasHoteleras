const express = require('express');
const connectDB = require('./config/db');
const reservaRoutes = require('./routes/reservaRoutes');
const { swaggerUi, specs } = require('./swagger');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api', reservaRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});