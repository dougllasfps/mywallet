const model = require('../model/lancamento')
const express = require('express')
const httpUtil = require('../util/httpUtil')
const logger = require('../util/logger')

const router = express.Router()

const post = async (req, res) => {
    try{
        const lancamento = req.body
        logger.debug(`post lancamentos : ${JSON.stringify(lancamento)}`)
        const savedOne = await model.create(lancamento)
        return httpUtil.created(res, savedOne);
    }catch(error){
        logger.error(error.ValidationError || error)
        httpUtil.badrequest(res, 'Erro ao criar lancamento')
    }
}

router.post('/', post)

module.exports = app => app.use('/lancamentos', router)