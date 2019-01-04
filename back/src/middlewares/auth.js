const jwt = require('../service/jwtService')

module.exports = ( req, res, next ) => {
    const authorization = req.headers.authorization
    
    if(!authorization){
        return res.status(401).send({error: 'Token não informado'})
    }

    const tokenValido = authorization.split(' ')

    if(tokenValido.length !== 2){
        return res.status(401).send({error: 'Token informado incorretamente'})
    }

    const [bearer, token] = tokenValido

    if(!/^Bearer$/i.test(bearer)){
        return res.status(401).send({error: 'Token fora do padrão'})
    }

    const result = jwt.autenticarToken(token)

    if(result.valid){
        res.idUsuario = result.id
        next()
    }else{
        return res.status(401).send({error: 'Token não autenticado'})
    }

}