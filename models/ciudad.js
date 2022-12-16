const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ciudadSchema = new Schema({
    nombre: String,
    clave: String
},{collection:'ciudad'});

//crear Modelo
const Ciudad = mongoose.model('Ciudad',ciudadSchema,'ciudad');

module.exports = Ciudad;