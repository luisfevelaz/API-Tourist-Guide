const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    nombre: String,
    id: String
});

//crear Modelo
const Categoria = mongoose.model('Categoria',categorySchema);

module.exports = Categoria;