import React from 'react'

import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';

class Menubar extends React.Component{

    redirect = (url) => {
        this.props.history.push(url)
    }

    render(){
        return (
            <Menu mode="horizontal">
                <Menu.Item key="1"  >
                    <Icon type="home" />
                    <span>Inicio</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => this.redirect('/lancamentos')}>
                    <Icon type="file-done" />
                    <span>Lançamentos</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    <span>Usuários</span>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Menubar)