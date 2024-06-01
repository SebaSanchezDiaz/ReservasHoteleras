// src/config/db.js
const mongoose = require("mongoose");
require("dotenv").config(); // Cargar variables de entorno desde .env

const connectDB = async () => {
  try {
    const connectionString = `${process.env.DB_CONN_STRING}/${process.env.DB_NAME}`;
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
