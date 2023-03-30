const express = require('express');
const app = express();

const path = require('path')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static('public'))



const port = process.env.PORT;
app.listen(port, () => {
    console.log('server is started')
})