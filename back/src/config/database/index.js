const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mywallet', {useNewUrlParser: true})
mongoose.Promise = global.Promise

console.log(' conectado ao mongodb ')

module.exports = mongoose