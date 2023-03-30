//en este file voy a guardar todas las routes
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
})

//me permite exportar todo
module.exports = router;