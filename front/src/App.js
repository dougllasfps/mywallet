import React, { Component } from 'react';
import './App.css';
import Menubar from './templates/Menubar';
import { Layout } from 'antd';
import {HashRouter} from 'react-router-dom'
import Rotas from './templates/rotas/Rotas';
import AuthContext from './components/auth/AuthContext'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AuthContext>
          <Menubar />
          <Layout.Content>
            <div className="container">
              <Rotas />
            </div>
          </Layout.Content>
        </AuthContext>
      </HashRouter>
    );
  }
}

export default App;
