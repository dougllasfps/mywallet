import React from 'react'

import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import {AuthConsumer} from '../components/auth/AuthContext'
const MenuItem = Menu.Item

class Menubar extends React.Component{

    redirect = (url) => {
        this.props.history.push(url)
    }
    
    render(){

        const items = [
            { icon: 'home' , label: 'Ínicio', to : '/'},
            { icon: 'file-done' , label: 'Lançamentos', to : '/lancamentos'},
            { icon: 'user' , label: 'Usuários', to : '/'},
            { icon: 'user' , label: 'Sair', to : '/'},
        ]

        const menuItems = items.map( (item, index) => (
            <MenuItem key={index + 1}  onClick={() => this.redirect(item.to)}>
                <Icon type={item.icon} />
                <span>{item.label}</span>
            </MenuItem>
        ))


        return (
            <Menu mode="horizontal">
                {menuItems}
            </Menu>
        )
    }
}

export default withRouter(Menubar)