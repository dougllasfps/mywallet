import React from 'react'

const ctx = React.createContext({
    nome: 'Wilson'
})

const Provider = ctx.Provider
export const Consumer = ctx.Consumer

class ContextTest extends React.Component{
    render(){
        const value = {
            nome: 'meu ovo'
        }

        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ContextTest