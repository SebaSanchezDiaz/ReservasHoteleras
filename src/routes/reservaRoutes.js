const express = require('express');
const { crearReserva } = require('../controllers/reservaController');

const router = express.Router();

router.post('/reservas', crearReserva);

module.exports = router;
