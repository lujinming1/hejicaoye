import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {is, fromJS} from 'immutable';
import Config from '../../../config/index';

//import {initialState, goLogin} from '../../../redux/action/login/loginAction';
import styles from './style/login.css';
import logoImg from '../../../static/image/logo.jpg';
import {Spin, Form, Input, Button, message} from 'antd';
const FormItem = Form.Item;

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      passwordDrity: false,
      loginBtnText: '登录'
    }
  }
  componentDidMount(){
    const {actions} = this.props;
//    actions.initialState();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {actions, form} = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if(!err){
        let username = values.username,
            password = values.password,
            loginParams = {
              username: username,
              password: password
            };
            // actions.goLogin(loginParams);
      }
    });
  }
  //验证用户名
  checkUsername = (rule, value, callback) => {
    const form = this.props.form;
    if(!value){
      callback();
    } else if(!Config.checkEng(value)){
      callback(Config.message.usernameEng);
    } else {
      callback();
    }
  }
  // 验证密码
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if(value && this.state.passwordDrity) {
      form.validateFields(['confirm'], {force: true});
    }
  }

  render(){
    const {loading, loginInfo, form} = this.props;
    const getFieldDecorator = form.getFieldDecorator;
    return (
      <div className='login-container'>
        <div className='login-form'>
          <Spin tip="载入中..." spinning={loading}>
            <div className='login-logo'>
              <img src={logoImg} />
              <span>禾吉草业</span>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <FormItem hasFeedback>
                {getFieldDecorator('username',{rules: [{required: true, message: Config.message.usernameInput},{validator:this.checkUsername}]})(
                  <Input size="large" placeholder="用户名" />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('password',{rules: [{required: true, message: Config.message.passwordInput},{validator:this.checkPassword}]})(
                  <Input size="large" placeholder="密码" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" size="large" loading={loginInfo.length > 0 ? true : false}>{loginInfo.length > 0 ? '登录中...' : '登录'}</Button>
              </FormItem>
            </Form>
          </Spin>
        </div>
      </div>
    );
  }
}

const LoginForm = Form.create()(Login);
const mapStateToProps = (state, ownProps) => {
  let {Common, Login} = state;
  return {
    loading: Common.loading,
    loginInfo: Login.loginInfo
  }
}
// 将 action 作为 props 绑定到 Product 上。
const mapDispatchToProps = (dispatch, ownProps) => {
//  actions: bindActionCreators({initialState, goLogin}, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Main;
