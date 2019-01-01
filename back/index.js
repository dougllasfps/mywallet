const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('./src/controller/authController')(app)
require('./src/controller/securityController')(app)
require('./src/controller/lancamentoController')(app)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log('Express initialized'))