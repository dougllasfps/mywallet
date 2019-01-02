import axios from '../config/axios'

export default class AuthService {
    
    constructor(){
        this.endpoint = "/auth"
    }

    registrarNovoUsuario = (usuario) => {
        console.log(this.endpoint)
        return axios.post(`${this.endpoint}/registrar`, usuario)
    }

    autenticarUsuario = async (email, senha) => {
        console.log(this.endpoint)
        return await axios.post(`${this.endpoint}/autenticar`, {email, senha})
    }

}