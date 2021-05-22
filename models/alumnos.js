// Archivo de conf de modelo de bdd

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// esquema de bdd:

const AlumnoSchema = new Schema({
    nombre: String,
    contacto: String,
    comentario: String
});

// exportar el modelo 
module.exports = mongoose.model('alumnos', AlumnoSchema);