import React, { Component } from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import store from './redux/store/configureStore';
import './App.css';
import BasicRouterList from './router/BasicRouterList';
import Main from './main';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store = {store} >
          <Router history={history}>
            <div style={{height:'100%'}}>
              <BasicRouterList />
              <Main />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
