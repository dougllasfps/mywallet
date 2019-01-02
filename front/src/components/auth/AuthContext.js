import React, {createContext, Component} from 'react'
import Login from '../../views/login/Login'

const context = createContext()

export const AuthConsumer = context.Consumer
const Provider = context.Provider

const USUARIO_LOGADO = '_usuarioLogado'

class AuthContext extends Component{

    state = {
        usuarioLogado : {},
        token: null,
        autenticado: false
    }

    logar = (dadosLogin) => {
        console.log(dadosLogin.token)
        localStorage.setItem(USUARIO_LOGADO, dadosLogin.usuario)
        this.setState({...this.state, token: dadosLogin.token, autenticado: true})
    }

    getUsuarioLogado = () => {
        return localStorage.getItem(USUARIO_LOGADO)
    }

    componentDidMount(){
        const usuarioLogado = this.getUsuarioLogado()
        const autenticado = null;
    }

    render(){
        const ctx = {
            state: this.state,
            logar: this.logar
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