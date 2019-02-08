const mongoose = require('mongoose')

//mongoose.connect('mongodb://dougllasfps:Doug11a$@ds157349.mlab.com:57349/mywallet', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost/mywallet', {useNewUrlParser: true})
mongoose.Promise = global.Promise

console.log(' conectado ao mongodb ')

module.exports = mongoose