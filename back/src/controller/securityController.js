const express = require('express')
const authMid = require('../middlewares/auth')

const router = express.Router();

router.use(authMid)

router.get('/resource', (req, res) => {
    res.send({auth:true})
})

module.exports = app => app.use( '/test', router )