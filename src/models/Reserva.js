const mongoose = require("mongoose");
require("dotenv").config();

const reservaSchema = new mongoose.Schema(
  {
    nombreCliente: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    nombreHotel: { type: String, required: true },
    habitacion: { type: String, required: true },
  },
  { collection: process.env.USERS_COLLECTION_NAME }
);

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = Reserva;
