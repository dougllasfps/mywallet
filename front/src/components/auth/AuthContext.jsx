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
        localStorage.setItem(USUARIO_LOGADO, dadosLogin.usuario)
        localStorage.setItem(AUTH_TOKEN, dadosLogin.token)
        this.setState({...this.state, autenticado: true})
        console.log('login()', this.state)
    }

    logout = () => {
        localStorage.removeItem(USUARIO_LOGADO)
        localStorage.removeItem(AUTH_TOKEN)
        this.setState({...this.state, autenticado:false})
    }

    getUsuarioLogado = () => {
        return localStorage.getItem(USUARIO_LOGADO)
    }

    componentDidMount(){
        const usuarioLogado = this.getUsuarioLogado()
        if(usuarioLogado){
            this.setState({...this.state, autenticado: true})
        }
        console.log('componentDidMount()', this.state)
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
                {/**isUsuarioAutenticado ? this.props.children : <Login />*/ }
                {this.props.children}
            </Provider> 
        )
    }
}

export default AuthContext;
