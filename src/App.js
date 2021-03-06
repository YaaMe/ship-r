import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome'
import faFreeSolid from '@fortawesome/fontawesome-free-solid'

import { Layout } from 'antd';
import { Home, Raiders, About } from 'containers';
import { Footerbar } from 'components';
import { store } from './store';

const { Footer, Content } = Layout;
library.add(faFreeSolid)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="App">
            <Content>
              <Switch>
                <Route path="/ship-r/home" component={Home}/>
                <Route path="/ship-r/raiders" component={Raiders}/>
                <Route path="/ship-r/about" component={About}/>
                <Redirect to="/ship-r/home"/>
              </Switch>
            </Content>
            <Footer>
              <Footerbar/>
            </Footer>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
