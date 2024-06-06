const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { version } = require('../package.json');

// Definir opciones para Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Reservas Hoteleras',
      version,
      description: 'API para gestionar reservas hoteleras',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta a tus archivos de rutas
};

// Inicializar Swagger-jsdoc
const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs,
};
