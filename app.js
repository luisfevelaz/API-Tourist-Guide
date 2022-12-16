const express = require('express');
const app = express();
const port = 3000;

// mongoDB
const mongoose = require('mongoose');
const user = 'tourist-user';
const password = 'p4ssw0rd123';
const uri = `mongodb+srv://${user}:${password}@sandbox.ukgiugf.mongodb.net/tourist?retryWrites=true&w=majority`;
mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('\nBase de datos conectada')
})
.catch(e=>console.log(e))


//Modelos
const Categoria = require('./models/categoria');
const Lugar = require('./models/lugar');
const Ciudad = require('./models/ciudad');


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/categorias', async(req, res) => {
    try {
        const arrayCategorias = await Categoria.find();
        res.send(arrayCategorias);
    } catch (error) {
        console.log(error);
    }
})

app.get('/lugares', async(req, res) => {
    try {
        const arrayLugares = await Lugar.find();
        res.send(arrayLugares);
    } catch (error) {
        console.log(error);
    }
})

app.get('/lugares/:ciudad/:categoria', async(req, res) => {
    let cd = req.params.ciudad;
    let categoria = req.params.categoria;
    try {
        const arrayLugares = await Lugar.find({categoria: categoria, ciudad: cd});
        res.send(arrayLugares);
    } catch (error) {
        console.log(error);
    }
})

app.get('/ciudades', async(req, res) => {
    try {
        const arrayCiudades = await Ciudad.find();
        res.send(arrayCiudades);
    } catch (error) {
        console.log(error);
    }
})
  
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
  })