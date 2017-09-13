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
import ProduceIndex from './ProduceIndex';
class ProducePage extends Component{
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
    const {isSmall} = this.props;
    return (
      <div className='main'>
      {!isSmall &&
        <div>
          <div className='sub_sidebar'>
            <div className='cover_layer'></div>
            <ul className="sub_sidebar_list" >
              <li className='current'onClick={this.handleClick} ref={(input) => {this.init = input}}>
                <Link className='link' to={`${this.props.match.url}/silage`}>青贮产品</Link>
              </li>
              <li onClick={this.handleClick}><Link className='link' to={`${this.props.match.url}/yellow`}>黄贮产品</Link></li>
              <li onClick={this.handleClick}><Link className='link' to={`${this.props.match.url}/lucerne`}>紫花苜蓿青贮</Link></li>
              <li onClick={this.handleClick}><Link className='link' to={`${this.props.match.url}/pack`}>打包技术</Link></li>
            </ul>
          </div>
          <div className="article_content">
            <Route path={`${this.props.match.url}/:infoID`} component={InfoID} />
            <Route exact path={`${this.props.match.url}`}  component={ProduceIndex}/>
          </div>
        </div>

      }
      {isSmall &&
        <div className="mobile_page">
          <ProduceIndex />
        </div>
      }
      </div>
    );
  }
}
ProducePage.propTypes = {
  isSmall: PropTypes.bool.isRequired
}
const mapStateToProps = (state, ownProps) => {
  const isSmall = state.screen.isSmall;
  return {
    isSmall
  }
}
const Produce = connect(mapStateToProps)(ProducePage);
export default Produce;
