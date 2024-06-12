const express = require('express');
const {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
  buscarReservasPorHotel
} = require('../controllers/reservaController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       required:
 *         - nombreCliente
 *         - fechaInicio
 *         - fechaFin
 *         - habitacion
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado de la reserva
 *         nombreCliente:
 *           type: string
 *           description: Nombre del cliente
 *         fechaInicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio de la reserva
 *         fechaFin:
 *           type: string
 *           format: date
 *           description: Fecha de fin de la reserva
 *         habitacion:
 *           type: string
 *           description: Número de habitación
 *       example:
 *         id: d5fE_asz
 *         nombreCliente: Juan Perez
 *         fechaInicio: 2024-06-10T00:00:00.000Z
 *         fechaFin: 2024-06-15T00:00:00.000Z
 *         habitacion: 101
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       400:
 *         description: Error al crear la reserva
 */
router.post('/reservas', crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de todas las reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/reservas', obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por su ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/reservas/:id', obtenerReservaPorId);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva por su ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       400:
 *         description: Error al actualizar la reserva
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/reservas/:id', actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva por su ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/reservas/:id', eliminarReserva);

/**
 * @swagger
 * /api/reservas/hotel/{nombreHotel}:
 *   get:
 *     summary: Obtener reservas por el nombre del hotel
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: nombreHotel
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del hotel
 *     responses:
 *       200:
 *         description: Lista de reservas para el hotel especificado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontraron reservas para el hotel
 */
router.get('/reservas/hotel/:nombreHotel', buscarReservasPorHotel);


module.exports = router;
