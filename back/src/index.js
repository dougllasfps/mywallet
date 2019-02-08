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

require('./controller/authController')(app)
require('./controller/securityController')(app)
require('./controller/lancamentoController')(app)

const port = process.env.PORT || 3001;

app.listen( port, () => console.log('Express initialized') )

module.exports = app