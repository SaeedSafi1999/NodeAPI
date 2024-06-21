const app = require('./app');
const config = require('./SRC/Config/Config');

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

