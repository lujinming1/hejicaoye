import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../style/component/page/common.css';
import InfoID from './InfoID';
import ComBrief from './ComBrief';
import ComNews from './ComNews';
import ComIndex from './ComIndex';

class CompanyPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: ''
    }
    this.handleClick = this.handleClick.bind(this);

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

  componentDidMount(){
    this.setState({
      current: this.init
    });
  }

  render(){
    const isSmall = this.props.isSmall;
    return (
      <div className='main'>
      {!isSmall &&
        <div>
          <div className='sub_sidebar'>
            <div className='cover_layer'></div>
            <ul className="sub_sidebar_list" >
              <li className='current'onClick={this.handleClick} ref={(input) => {this.init = input}}>
                <Link className='link' to={`${this.props.match.url}/ComBrief`}>公司简介</Link>
              </li>
              <li onClick={this.handleClick}><Link className='link' to={`${this.props.match.url}/ComNews`}>新闻资讯</Link></li>
            </ul>
          </div>
          <div className="article_content">
            <Route path={`${this.props.match.url}/:infoID`} component={InfoID} />
            <Route exact path={`${this.props.match.url}`} render={() => {return <ComBrief />}} />
          </div>
        </div>

      }
      {isSmall &&
        <div className="mobile_page">
          <ComIndex />
        </div>
      }
      </div>
    );
  }

}
CompanyPage.propTypes = {
  isSmall: PropTypes.bool.isRequired
}
const mapStateToProps = (state, ownProps) => {
  let {isSmall} = state.screen;
  return {
    isSmall
  }
}
const Company = connect(mapStateToProps)(CompanyPage);
export default Company;
