import React from 'react'
import {Route} from 'react-router-dom'
import Lancamentos from '../../views/lancamentos/Lancamentos'
import LancamentosForm from '../../views/lancamentos/LancamentosForm'
import Login from '../../views/login/Login'

export default class Rotas extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Route component={Login} path="/login" />
                <Route component={Lancamentos} path="/lancamentos" />
                <Route component={LancamentosForm} path="/lancamentos-form/:id" />
            </React.Fragment>
        )
    }
}