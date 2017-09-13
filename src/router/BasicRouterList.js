import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from '../component/page/Home';
import Produce from '../component/page/produce/Produce';
import Ours from '../component/page/contant/Contant';
import CompanyInfo from '../component/page/company/CompanyInfo';
import Admin from '../admin/Admin';

import ErrorPage from '../component/page/ErrorPage.js';
class BasicRouterList extends Component{
  render() {
    return(
      <div style={{height:'100%'}}>
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
