import React, {createContext, Component} from 'react'
import Login from '../../views/login/Login'

const context = createContext()

export const AuthConsumer = context.Consumer
const Provider = context.Provider

const USUARIO_LOGADO = '_usuarioLogado'
const AUTH_TOKEN = '_authToken'

class AuthContext extends Component{

    state = {
        autenticado: false
    }

    login = (dadosLogin) => {
        console.log(dadosLogin)
        localStorage.setItem(USUARIO_LOGADO, dadosLogin.usuario)
        localStorage.setItem(AUTH_TOKEN, dadosLogin.token)
        this.setState({...this.state, autenticado: true})
    }

    logout = () => {
        localStorage.removeItem(USUARIO_LOGADO)
        localStorage.removeItem(AUTH_TOKEN)
    }

    getUsuarioLogado = () => {
        return localStorage.getItem(USUARIO_LOGADO)
    }

    componentDidMount(){
        const usuarioLogado = this.getUsuarioLogado()
        if(usuarioLogado){
            this.setState({...this.state, autenticado: true})
        }
    }

    render(){
        const ctx = {
            state: this.state,
            logar: this.login,
            deslogar: this.logout
        }

        const isUsuarioAutenticado = this.state.autenticado

        return (
            <Provider value={ctx}>
                {isUsuarioAutenticado ? this.props.children : <Login /> }
            </Provider> 
        )
    }
}

export default AuthContext;