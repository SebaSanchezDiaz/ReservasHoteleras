const express = require("express");
const {
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
} = require("../controllers/reservaController");

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
router.post("/reservas", crearReserva);

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
router.get("/reservas", obtenerReservas);

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
router.get("/reservas/:id", obtenerReservaPorId);

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
router.put("/reservas/:id", actualizarReserva);

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
router.delete("/reservas/:id", eliminarReserva);

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
router.get("/reservas/hotel/:nombreHotel", buscarReservasPorHotel);

/**
 * @swagger
 * /api/reservas/tipoHabitacion/{tipoHabitacion}:
 *   get:
 *     summary: Obtener reservas por el tipo de habitacion
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: tipoHabitacion
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del tipo de habitacion
 *     responses:
 *       200:
 *         description: Lista de reservas para la habitacion especificada
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontraron reservas para el tipo de habitacion
 */
router.get(
  "/reservas/tipoHabitacion/:tipoHabitacion",
  buscarReservaPorTipoHabitacion
);

/**
 * @swagger
 * /api/reservas/estado/{estado}:
 *   get:
 *     summary: Obtener reservas por el tipo de estado
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: estado
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del tipo de estado
 *     responses:
 *       200:
 *         description: Lista de reservas para la habitacion especificada
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontraron reservas para el tipo de habitacion
 */
router.get("/reservas/estado/:estado", buscaPorEstado);

/**
 * @swagger
 * /api/reservas/nHuespedes/{nHuespedes}:
 *   get:
 *     summary: Obtener reservas por el número de huéspedes
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: nHuespedes
 *         schema:
 *           type: int
 *         required: true
 *         description: Número de huéspedes
 *     responses:
 *       200:
 *         description: Lista de reservas para el número especificado de huéspedes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontraron reservas para el número de huéspedes
 */
router.get("/reservas/nHuespedes/:nHuespedes", buscarReservasPorNHuespedes);

/**
 * @swagger
 * /api/reservas/rangoFechas/{fechaInicio}/{fechaFin}:
 *   get:
 *     summary: Obtener reservas por rango de fechas
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: fechaInicio
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de inicio del rango
 *       - in: path
 *         name: fechaFin
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de fin del rango
 *     responses:
 *       200:
 *         description: Lista de reservas para el rango de fechas especificado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: No se encontraron reservas para el rango de fechas
 */
router.get(
  "/reservas/rangoFechas/:fechaInicio/:fechaFin",
  buscarReservasPorRangoDeFechas
);

module.exports = router;
