const express = require('express'); //instancia de express
const path = require('path');
const app = express(); //objetode express, inicializar variable

app.use('/public', express.static(path.join(__dirname, "/public")));

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});