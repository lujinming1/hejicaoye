import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import Config from '../../../config/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
/**
 * 公共菜单
 *
 * @export
 * @class Lmenu
 * @extends {Component}
 */
export class Lmenu extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
		const openKeys = Config.localItem('OPENKEY') ? [Config.localItem('OPENKEY')] : [];
		this.state = {
			openKeys: openKeys
		};
	}
    onOpenChange = (openKeys) => {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    Config.localItem('OPENKEY', nextOpenKeys);
	    this.setState({ openKeys: nextOpenKeys });
	}
  	getAncestorKeys = (key) => {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	}
	render() {
    const location = window.location;
		const defaultSelectedKey = process.env.NODE_ENV !== 'production' ? [location.pathname.split('/')[location.pathname.split('/').length - 1] || 'home'] : [location.hash.split('/')[location.hash.split('/').length - 1].split('?')[0] || 'home'];
		return (
			<Menu openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark" mode={this.props.mode} defaultSelectedKeys={defaultSelectedKey}>
		        <Menu.Item key="home">
			        <Link to="/admin/home">
		              <Icon type="home" />
		              {!this.props.collapsed && <span className="nav-text">主页</span>}
		            </Link>
	            </Menu.Item>
                <SubMenu key="company" title={<span><Icon type="laptop" /><span className="nav-text">公司资讯</span></span>}>
                    <Menu.Item key="comBrief"><Link to="/admin/company/comBrief">公司简介</Link></Menu.Item>
										<Menu.Item key="comNews"><Link to="/admin/company/comNews">新闻资讯</Link></Menu.Item>
	            </SubMenu>
	            <SubMenu key="produce" title={<span><Icon type="picture" /><span className="nav-text">产品展示</span></span>}>
                    <Menu.Item key="silage"><Link to="/admin/produce/silage">青贮产品</Link></Menu.Item>
                    <Menu.Item key="yellow"><Link to="/admin/produce/yellow">黄贮产品</Link></Menu.Item>
										<Menu.Item key="lucerne"><Link to="/admin/produce/lucerne">紫花苜蓿青贮</Link></Menu.Item>
                    <Menu.Item key="pack"><Link to="/admin/produce/pack">打包技术</Link></Menu.Item>
	            </SubMenu>
							<SubMenu key="ours" title={<span><Icon type="user" /><span className="nav-text">联系我们</span></span>}>
                    <Menu.Item key="about"><Link to="/admin/ours/about">关于我们</Link></Menu.Item>
                    <Menu.Item key="job"><Link to="/admin/ours/job">加入我们</Link></Menu.Item>
	            </SubMenu>
							<Menu.Item key="setting">
	            <Link to="/admin/setting">
	              <Icon type="setting" />
	              {!this.props.collapsed && <span className="nav-text">系统设置</span>}
	            </Link>
	            </Menu.Item>

	        </Menu>
		)
	}
}
