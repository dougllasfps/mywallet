import React, { Component } from 'react';
import './App.css';
import Menubar from './templates/Menubar';
import { Layout } from 'antd';
import {HashRouter} from 'react-router-dom'
import Rotas from './templates/rotas/Rotas';
import ContextTest from './components/ContextTest';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>        
            <Menubar />
            <Layout.Content>
              <div className="container">
                <ContextTest>
                  <Rotas />
                </ContextTest>
              </div>
            </Layout.Content>
          </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
