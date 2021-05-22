const express = require('express')
const app = express()

// habilitar controlador de rutas
const router = express.Router;

// importar rutas
const indexRoutes = require('./routes/index');

var mongoose = require('mongoose');

// definir puerto que me entrega la nube o uno que definamos
const port = process.env.PORT || 3000;

// Implementación de middleware para servir public:
app.use(express.static(__dirname + '/public'));

// entender los datos que vienen de un html form
app.use(express.urlencoded({ extended: false}));

// implementar ejs como motor de plantillas
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

// mapear indexRoutes
app.use('/', indexRoutes);

// habilitar el uso de promesas en mongoose
mongoose.Promise = global.Promise;

// implementar la promesa para conexión
mongoose.connect("mongodb+srv://hipermedia:8ROJaRfyxBM1beyB@cluster0.dcafu.mongodb.net/test?retryWrites=true&w=majority",
{
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('La conexión a la bdd se realizó correctamente');

  app.listen(port, ()=> {
    console.log(`Servidor corriendo en puerto: ${port}`);
});

});

 







