const express = require('express')
const model = require('../model/usuario')

const app = express()

const router = express.Router();


const register = async (req, res) => {
    try{
        const {email} = req.body

        if( await model.findOne({email})){
            return res.status(400).send({error: 'Usuario existente'})
        }
        const usuario = await model.create(req.body)
        delete usuario.senha
        return res.send({usuario})
    }catch(error){
        console.log(error)
        return res.status(400).send({error: 'Erro ao registrar usuario'})
    }
}

router.post('/registrar', register)

module.exports = app => app.use('/auth', router);