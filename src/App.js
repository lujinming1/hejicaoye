import React, { Component } from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

import TopWrapper from './component/nav/TopWrapper.js';
import FooterWrapper from './component/nav/FooterWrapper.js';
import BasicRouterList from './router/BasicRouterList';



const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className='router_div'>
            <TopWrapper />
              <BasicRouterList />
            <FooterWrapper />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
