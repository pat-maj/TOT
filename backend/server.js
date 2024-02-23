const express = require("express");
const app = express();

const HTTP_PORT = 3333;

app.listen(HTTP_PORT, () => {
    console.log("App is listening on port: " + HTTP_PORT);
});

app.get('/', (req, res, next) => {
    res.json({'status': 'Alive'});
});

//require('./app/routes/user.server.routes')(app);

app.use((req, res) => {
    res.sendStatus(404);
});
