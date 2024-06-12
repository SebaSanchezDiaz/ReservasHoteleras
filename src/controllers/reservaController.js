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

const buscarReservasPorHotel = async (req, res) => {
  try {
    const nombreHotel = req.params.nombreHotel;
    const reservas = await Reserva.find({ nombreHotel: nombreHotel });
    if (reservas.length === 0) {
      return res
        .status(404)
        .send({ message: "No se encontraron reservas para este hotel" });
    }
    res.send(reservas);
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarReservaPorTipoHabitacion = async (req, res) => {
  try {
    const tipoHabitacion = req.params.tipoHabitacion;
    const reservas = await Reserva.find({ tipoHabitacion: tipoHabitacion });
    if (reservas.length === 0) {
      return res
        .status(404)
        .send({ message: "No se encontro ese tipo de habitacion" });
    }
    res.send(reservas);
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscaPorEstado = async (req, res) => {
  try {
    const estado = req.params.estado;
    const reservas = await Reserva.find({ estado: estado });
    if (reservas.length === 0) {
      return res
        .status(404)
        .send({ message: "No se encontro una habitacion con ese estado" });
    }
    res.send(reservas);
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarReservasPorNHuespedes = async (req, res) => {
  try {
    const nHuespedes = parseInt(req.params.nHuespedes);
    const reservas = await Reserva.find({ nHuespedes: nHuespedes });
    if (reservas.length === 0) {
      return res.status(404).send({ message: "No se encontraron reservas para este número de huéspedes" });
    }
    res.send(reservas);
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarReservasPorRangoDeFechas = async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.params;
    const reservas = await Reserva.find({
      fechaInicio: { $gte: new Date(fechaInicio) },
      fechaFin: { $lte: new Date(fechaFin) }
    });
    if (reservas.length === 0) {
      return res.status(404).send({ message: "No se encontraron reservas para este rango de fechas" });
    }
    res.send(reservas);
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
  buscarReservasPorHotel,
  buscarReservaPorTipoHabitacion,
  buscaPorEstado,
  buscarReservasPorNHuespedes,
  buscarReservasPorRangoDeFechas,
};
