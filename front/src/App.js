import React, { Component, Fragment } from 'react';
import './App.css';
import Menubar from './templates/Menubar';
import { Layout } from 'antd';
import {HashRouter} from 'react-router-dom'
import Rotas from './templates/rotas/Rotas';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Menubar />
          <Layout.Content>
            <div className="container">
              <Rotas />
            </div>
          </Layout.Content>
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;
