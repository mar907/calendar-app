const express = require('express');
require('dotenv').config();
const cors= require('cors');
const {bdConnection} = require ('./database/config');

const app = express();

bdConnection();

app.use(cors())

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen(process.env.PORT, async () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});