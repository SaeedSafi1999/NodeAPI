const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Shop API',
            version: '1.0.0',
            description: 'A simple Express Product API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./SRC/Routers/*.js', './SRC/Models/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
