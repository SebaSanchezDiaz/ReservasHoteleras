const Reserva = require("../models/Reserva");

const crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body);
    await reserva.save();
    res.status(201).send(reserva);
  } catch (err) {
    res.status(400).send(err);
  }
};

const obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.send(reservas);
  } catch (err) {
    res.status(500).send(err);
  }
};

const obtenerReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) {
      return res.status(404).send({ message: "Reserva no encontrada" });
    }
    res.send(reserva);
  } catch (err) {
    res.status(500).send(err);
  }
};


const actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!reserva) {
      return res.status(404).send({ message: "Reserva no encontrada" });
    }
    res.send(reserva);
  } catch (err) {
    res.status(500).send(err);
  }
};

const eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndDelete(req.params.id);
    if (!reserva) {
      return res.status(404).send({ message: "Reserva no encontrada" });
    }
    res.send({ message: "Reserva eliminada exitosamente" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
};
