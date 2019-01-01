import React from 'react'
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
export default class Template extends React.Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }

      render(){
          return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>

                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
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
                </Sider>
                <Header >

                    hello
                </Header>
                <Content>
                </Content>
            </Layout>
          )
      }
} 

