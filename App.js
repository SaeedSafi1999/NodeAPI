const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./SRC/Config/Config');
const productRoutes = require('./SRC/Routers/Router');
const userRoutes = require('./SRC/Routers/userRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./SRC/Config/SwaggerConfig');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


module.exports = app;


