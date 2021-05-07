import React from 'react'
import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';



const { SubMenu } = Menu;

class Nav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link style = {{color : "black"}}
                        to = "/Dashboard">
                        Main page
                        </Link>
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link style = {{color : "black"}}
                        to = "/Dashboard/MyWallet">
                        My Wallet
                        </Link>
        </Menu.Item>
        <Menu.Item key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
        <Link style = {{color : "black"}}
                         to="/Dashboard/About">
                        About page
                        </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
        
                        <Link style = {{color : "black"}}
                        to = "/">
                        Logout
                        </Link>
        </Menu.Item>
      </Menu>
    );
  }
}


/*
function Nav(){
    return(
        <div>
            <nav>
                    <h3>Logo</h3>
                    <ul>
                        <Link style = {{color : "black"}}
                         to="/Dashboard/About">
                        <li>About page</li>
                        </Link>
                        <Link style = {{color : "black"}}
                        to = "/Dashboard/MyWallet">
                        <li>My Wallet</li>
                        </Link>
                        <Link style = {{color : "black"}}
                        to = "/Dashboard">
                        <li>Main page</li>
                        </Link>
                        <Link style = {{color : "black"}}
                        to = "/">
                        <li>Back to login</li>
                        </Link>
                    </ul>

            </nav>

        </div>
    )
}
*/
export default Nav