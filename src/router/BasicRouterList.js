import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from '../component/page/Home';
import Produce from '../component/page/Produce';
import Ours from '../component/page/Ours';
import CompanyInfo from '../component/page/CompanyInfo';
import Admin from '../admin/Admin';
import ErrorPage from '../component/page/ErrorPage.js';
class BasicRouterList extends Component{
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Produce' component={Produce} />
          <Route path='/Ours' component={Ours} />
          <Route path='/CompanyInfo' component={CompanyInfo} />
          <Route path='/Admin' component={Admin} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}
export default BasicRouterList;
