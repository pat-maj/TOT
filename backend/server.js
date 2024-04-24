const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const HTTP_PORT = 3333;

app.listen(HTTP_PORT, () => {
    console.log("App is listening on port: " + HTTP_PORT);
});

app.get('/', (req, res, next) => {
    res.json({'status': 'Alive'});
});

require('./app/routes/tournament.server.routes')(app);
require('./app/routes/participant.server.routes')(app);

app.use((req, res) => {
    res.sendStatus(404);
});
