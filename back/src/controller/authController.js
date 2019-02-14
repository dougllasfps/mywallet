const express = require('express')
//const model = require('../model/usuario')
const bcrytp = require('bcryptjs')
const jwt = require('../service/jwtService')

const router = express.Router();


const registrar = async (req, res) => {
    try{
        const { email } = req.body

        console.log( 'request ', req.body)

        let usuario = null //await model.findOne({email})

        if( usuario ){
            return res.status(400).send({error: 'Usuario existente'})
        }
        usuario = req.body //await model.create(req.body)
        usuario.senha = undefined
        return res.status(201).send({usuario, token: jwt.gerarToken(usuario)})
    }catch(error){
        console.log(error)
        return res.status(400).send({error: 'Erro ao registrar usuario'})
    }
}

const autenticar = async (req, res) => {
    const {email, senha} = req.body
    try{
        const usuario = await model.findOne({email}).select('+senha')

        if(!usuario){
            res.status(400).send({error: 'Usuario não encontrado.'})
        }

        if(!await bcrytp.compare(senha, usuario.senha)){
            res.status(400).send({error: 'Senha incorreta.'})
        }
        usuario.senha = undefined


        res.send({usuario, token: jwt.gerarToken(usuario)})

    }catch(error){
        console.log(error)
        return res.status(400).send({error: 'Erro ao autenticar usuario'})
    }
}

const gerarToken = (usuario) => {

}

router.post('/registrar', registrar)
router.post('/autenticar', autenticar)

module.exports = app => app.use('/auth', router);