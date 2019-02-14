//const model = require('../model/lancamento')
const express = require('express')
const httpUtil = require('../util/httpUtil')
const logger = require('../util/logger')

const router = express.Router()

const fetchLancamentos = async (req, res) => {
    try{
        const lancamento = req.query
        logger.debug(`fetching lancamentos to params : ${JSON.stringify(lancamento)}`)
        const list = await model.find(lancamento)
        return httpUtil.ok(res, list);
    }catch(error){
        logger.error(error)
        httpUtil.badrequest(res, 'Erro ao buscar lancamentos')
    }
}

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

const put = async (req, res) => {
    try{
        const id = req.params.id
        const lancamento = req.body
        logger.debug(`put lancamentos : ${JSON.stringify(lancamento)}, for id ${id}`)
        const savedOne = await model.findOneAndUpdate(id, lancamento, {new:true} )
        return httpUtil.ok(res, savedOne);
    }catch(error){
        logger.error(error.ValidationError || error)
        httpUtil.badrequest(res, 'Erro ao atualizar lancamento')
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id
        logger.debug(`finding one lancamento to id : ${id}`)
        const result = await model.findById(id)
        return httpUtil.ok(res, result);
    }catch(error){
        logger.error(error)
        httpUtil.badrequest(res, 'Erro ao buscar lancamento')
    }
}

router.get('/:id', findOne)
router.get('/', fetchLancamentos)
router.post('/', post)
router.put('/:id', put)

module.exports = app => app.use('/lancamentos', router)