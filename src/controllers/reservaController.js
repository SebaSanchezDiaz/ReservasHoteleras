const Reserva = require('../models/Reserva');

const crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body);
    await reserva.save();
    res.status(201).send(reserva);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { crearReserva };
