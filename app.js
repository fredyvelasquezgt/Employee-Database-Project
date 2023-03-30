const express = require('express');
const app = express();

const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//importo 
const employeeRoutes = require('./routes/employees')


dotenv.config({path: './config.env'});

//connecting to mongodb database
mongoose.connect(proces.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static('public'))

//con esto ya puedo usar las rutas
app.use(employeeRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('server is started')
})