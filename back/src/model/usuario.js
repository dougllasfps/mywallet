const mongoose = require('../config/database/index')
const bcrypt = require('bcryptjs')

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String , required : true },
    email: {type: String, required: true, lowercase: true, unique: true},
    senha: { type: String, select: false },
    dataCadastro: { type: Date, default : Date.now}
})

UsuarioSchema.pre('save', async function(next){
    console.log(`Criando hash para o usuario ${this.nome}`)
    if(this.senha){
        const hash = await bcrypt.hash(this.senha, 10)
        this.senha = hash
    }

    next();
})

const UsuarioModel = mongoose.model('usuario', UsuarioSchema)

module.exports = UsuarioModel;