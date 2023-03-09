const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const DB = require('./src/config/db');

//conexion a la DB
DB();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/v1/user', require('./src/routes/user'));
app.use('/api/v1/breed', require('./src/routes/breed'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})