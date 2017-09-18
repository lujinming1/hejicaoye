import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ToAdmin} from '../redux/action/adminAction'
import Layout from './component/layout/layout';
import Login from './containers/login/login';
class AdminPage extends Component{
  componentDidMount(){
    const {dispatch, toAdmin} = this.props;
    dispatch(ToAdmin(true));
  }
  componentWillUnmount(){
    const {dispatch, toAdmin} = this.props;
    dispatch(ToAdmin(false));
  }
  render(){
    const t = false;
    return (
      <div>
      { t &&
      <Layout />
    }
    {!t &&
      <Login />

    }
    </div>

    )
  }
}

AdminPage.propTypes = {
  toAdmin: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps){
  const {toAdmin} = state;
  return {
    toAdmin
  }
}
const Admin = connect(mapStateToProps)(AdminPage);
export default Admin;
