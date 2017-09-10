import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../../style/component/nav/topwrapper.css';

class TopWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      mobileStyle: {display: 'none'},
      menuStyle: { display: 'block'}
    }
    this.handleWidth = this.handleWidth.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleWidth(){
    if(window.innerWidth < 700){
        this.setState({
          mobileStyle: { display: 'block'},
          menuStyle: {display: 'none'}
        })
    } else {
      this.setState({
        mobileStyle: { display: 'none'},
        menuStyle: {display: 'flex'}
      })
    }
  }
  handleClick(){
    if(this.state.menuStyle['display'] == 'none'){
      this.setState({
        menuStyle:{
          display: 'block',
          top: '70px',
          background: '#008000'
        }
      });
    } else {
      this.setState({
        menuStyle: {display: 'none'}
      })
    }
  }

  componentDidMount(){
    if(window.innerWidth < 700){
        this.setState({
          mobileStyle: { display: 'block'},
          menuStyle: {display: 'none'}
        });

    }else{
      this.setState({
        mobileStyle: { display: 'none'},
        menuStyle: {display: 'flex'}
      })
    }
    window.addEventListener('resize',this.handleWidth);

  }

  render(){


    return (
      <div className='head_wrap head_wrap_expand'ref={(input)=>{this.head_wrap = input}}>
        <div className='head_bgcolor'></div>
        <div className='head'>
          <div className='head_con' >
            <Link className='link' to='/'><h1 className='logo'>禾吉草业</h1></Link>
            <div className='head_Mobile' style={this.state.mobileStyle} onClick={this.handleClick}></div>
            <ul className='menu_list' style={this.state.menuStyle}>
              <li className='li'><Link className='link' to='/CompanyInfo'>公司消息</Link></li>
              <li className='li'><Link className='link' to='/Produce'>产品展示</Link></li>
              <li className='li'><Link className='link' to='/Ours'>联系我们</Link></li>
              <li className='li'><Link className='link' to='/Admin'>网站管理</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopWrapper;
