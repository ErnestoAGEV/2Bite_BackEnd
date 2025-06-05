const express = require ('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');



const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

server.listen(3000, '192.168.1.125' || 'localhost', function() {
    console.log('Aplicación de NodeJS ' + port + ' Iniciada...')
});

app.get('/', (req,res) => {
    res.send('Ruta reiz del backend');
});

app.get('/test', (req,res) => {
    res.send('Esta es la ruta TEST');
});

//ERROR HANDELER

app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});


//200 UNA RESPUESTA EXITOSA
//404 ES UN MENSAJE DE ERROR , LA RUTA NO EXISTE
//500 ERROR INTERNO DEL SERVIDOR 