import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../style/component/nav/topwrapper.css';

class TopWrapper extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.isSmall){
      if(this.menuStyle.style['display'] === 'none'){
        this.menuStyle.style['display'] = 'block';
        this.menuStyle.style['top'] = '70px';
        this.menuStyle.style['background'] = '#008000';
      } else {
        this.menuStyle.style['display'] = 'none';

      }

    }
  }

  componentDidMount(){
    const {isSmall} = this.props;
    if(isSmall){
          this.mobileStyle.style.display = 'block';
          this.menuStyle.style.display = 'none';
    }else{
      this.mobileStyle.style.display = 'none';
      this.menuStyle.style.display = 'flex';
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.isSmall){
      this.mobileStyle.style.display = 'block';
      this.menuStyle.style.display = 'none';
    } else {
      this.mobileStyle.style.display = 'none';
      this.menuStyle.style.display = 'flex';
    }
    return true;
  }

  render(){


    return (
      <div className='head_wrap head_wrap_expand'ref={(input)=>{this.head_wrap = input}}>
        <div className='head_bgcolor'></div>
        <div className='head'>
          <div className='head_con' >
            <Link className='link' to='/'><h1 className='logo'>禾吉草业</h1></Link>
            <div className='head_Mobile' ref={(elem) => {this.mobileStyle = elem}} onClick={this.handleClick}></div>
            <ul className='menu_list' ref={(elem) => {this.menuStyle = elem}} onClick={this.handleClick}>
              <li className='li'><Link className='link' to='/companyInfo'>公司资讯</Link></li>
              <li className='li'><Link className='link' to='/produce'>产品展示</Link></li>
              <li className='li'><Link className='link' to='/ours'>联系我们</Link></li>
              <li className='li'><Link className='link' to='/admin'>网站管理</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
TopWrapper.propTypes = {
  isSmall:PropTypes.bool.isRequired
}
export default TopWrapper;
