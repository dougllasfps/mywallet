import axios from '../config/axios'

export default class LancamentoService {

    constructor(){
       this.baseUrl = `${process.env.REACT_APP_BASE_SERVICE_URL}/lancamentos` 
    }

    todos = async () => {
        const resp = await axios.get(this.baseUrl);
        return resp.data
    }

    salvar = async (lancamento) => {
        console.log(`Lancamento to ${this.baseUrl} , obj: ${JSON.stringify(lancamento)}`)
        const resp = await axios.post(this.baseUrl, lancamento)
        return resp;
    }

    carregar = (id) => {
        const endpoint = `${this.baseUrl}/${id}`
        return axios.get(endpoint)
    }
}