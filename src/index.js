let express = require('express');
let app = express();
let placeRoute = require('./routes/place');
let placesRoute = require('./routes/places');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

app.use(placeRoute);
app.use(placesRoute);
app.use(express.static('public'));

//Handler for 404 - resource Not Found
app.use((req, res, next) => {
    res.status(404).send('¡Recurso no encontrado!');
});

//Handler for Error 500
app.use((req, res, next) =>{
    Console.error(error.stack);    
    res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Servidor esta iniciando en puerto:${PORT}`));

