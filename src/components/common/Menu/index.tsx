import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.less'
import Logo from '@src/static/logo.svg';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    // TeamOutlined,
    // UserOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
const SiderList = [
    {
        id: 1, icon: <DesktopOutlined />, menuText: '主菜单1', children: [
            { id: '1_1', text: 'option 1', link: '/home' }
        ]
    },
    {
        id: 2, icon: <PieChartOutlined />, menuText: '主菜单2', link: '/qq'
    },
    {
        id: 3, icon: <FileOutlined />, menuText: '主菜单3', link: '/qq'
    }
]
class Menulist extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <React.Fragment>
                <Sider className='menu_menu' collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" >
                        <img src={Logo} alt="logo" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            SiderList.map(item => {
                                return item.children ? <SubMenu key={item.id} icon={item.icon} title={item.menuText}>
                                    {
                                        item.children.map(items => {
                                            return <Menu.Item key={items.id}><Link to={items.link}>{items.text} </Link></Menu.Item>

                                        })
                                    }
                                </SubMenu> : <Menu.Item key={item.id} icon={item.icon}>
                                        <Link to={item.link}>
                                            {item.menuText}
                                        </Link>
                                    </Menu.Item>
                            }
                            )
                        }
                    </Menu>
                </Sider>
            </React.Fragment>
        )
    }
}
export default Menulist;
