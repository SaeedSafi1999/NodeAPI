const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./SRC/Config/Config');
const userRoutes = require('./SRC/Routers/userRoute');
const AuthRoutes = require('./SRC/Routers/identityManagerRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./SRC/Config/SwaggerConfig');
const jwt = require('jsonwebtoken');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
// Database connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
// Routes
app.use('/api/users', userRoutes);
app.use('/api/IdentityManager', AuthRoutes);

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


module.exports = app;


