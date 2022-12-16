const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lugarSchema = new Schema({
    categoria: String,
    nombre: String,
    ciudad: String,
    location: Object
},{collection:'lugar'});

//crear Modelo
const Lugar = mongoose.model('Lugar',lugarSchema,'lugar');

module.exports = Lugar;