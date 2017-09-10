import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';
import '../../style/component/page/common.css';
import InfoID from './InfoID';
import ComBrief from './ComBrief';
import ComNews from './ComNews';

class CompanyInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleWidth = this.handleWidth.bind(this);
  }
  handleClick(event){
    let elem = event.currentTarget;
    if(this.state.current != elem){
      this.state.current.className = '';
      elem.className = 'current';
      this.setState({
        current: elem
      });
    }
  }
  handleWidth(){
    if(window.innerWidth < 700){
        this.setState({
          comMobileStyle: { display: 'block'},
          comMenuStyle: {display: 'none'}
        })
    } else {
      this.setState({
        comMobileStyle: { display: 'none'},
        comMenuStyle: {display: 'block'}
      })
    }
  }
  componentDidMount(){
    this.setState({
      current: this.init
    });
    if(window.innerWidth < 800){
        this.setState({
          comMobileStyle: { display: 'block'},
          comMenuStyle: {display: 'none'}
        });

    }else{
      this.setState({
        comMobileStyle: { display: 'none'},
        comMenuStyle: {display: 'block'}
      })
    }
    window.addEventListener('resize',this.handleWidth);
  }

  render(){
    return (
      <div className='main'>
        <div style={this.state.comMenuStyle}>
          <div className='sub_sidebar'>
            <div className='cover_layer'></div>
            <ul className="sub_sidebar_list" >
              <li className='current'onClick={this.handleClick} ref={(input) => {this.init = input}}><Link className='link' to={`${this.props.match.url}/ComBrief`}>公司简介</Link></li>
              <li onClick={this.handleClick}><Link className='link' to={`${this.props.match.url}/ComNews`}>新闻资讯</Link></li>
            </ul>
          </div>
          <div className="article_content">
            <Route path={`${this.props.match.url}/:infoID`} component={InfoID} />
            <Route exact path={`${this.props.match.url}`} component={ComBrief} />
          </div>
        </div>
        <div className="mobile_page" style={this.state.comMobileStyle}>
          <ComBrief />
          <ComNews />
        </div>
      </div>



    );
  }
}
export default CompanyInfo;
