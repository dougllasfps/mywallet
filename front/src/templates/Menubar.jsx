import React from 'react'

import { Menu, Icon } from 'antd';

export default props => (
        <Menu mode="horizontal">
            <Menu.Item key="1" >
                <Icon type="home" />
                <span>Inicio</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="file-done" />
                <span>Lançamentos</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                <span>Usuários</span>
            </Menu.Item>
        </Menu>
)