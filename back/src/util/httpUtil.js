function responseStatus(response, statusCode, payload){
    return response.status(statusCode).send(payload)
}

function unauthorized(response, message){
    return responseStatus(response, 401, {error: message})
}

function badrequest(response, message){
    return responseStatus(response, 404, {error: message || 'item não encontrado'})
}

function created(response, payload){
    return responseStatus(response, 201, payload)
}

function ok(response, payload){
    return responseStatus(response, 200, payload)
}

module.exports = {
    responseStatus,
    unauthorized,
    badrequest,
    created,
    ok
}