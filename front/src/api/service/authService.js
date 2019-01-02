import axios from '../config/axios'

export default class AuthService {
    
    constructor(){
        this.baseUrl = `${process.env.REACT_APP_BASE_SERVICE_URL}/auth` 
    }

    registrarNovoUsuario = (usuario) => {
        return axios.post(`${this.baseUrl}/registrar`, usuario)
    }

    autenticarUsuario = async (email, senha) => {
        return await axios.post(`${this.baseUrl}/autenticar`, {email, senha})
    }

    

}