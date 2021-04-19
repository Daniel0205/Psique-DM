import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import  Logo from "../assets/logo72x83.png";

const Header = ({ location }) => (
  <Layout.Header
    style={{
      padding: '0 32px',
    }}
  >
    <div
      style={{
        float: 'left',
      }}
    >
      <img 
        alt="Logo"
        style={{
          color: '#fff',
          margin: 0,
          marginRight: '1em',
          display: 'inline',
          width: '25%',
          lineHeight: '54px',
          cursor: 'pointer'
        }}
        src={Logo}
        onClick={()=>window.location.replace(process.env.REACT_APP_MAIN_PAGE)}/>
      <h2
        style={{
          color: '#fff',
          margin: 0,
          marginRight: '1em',
          display: 'inline',
          width: 100,
          lineHeight: '54px',
        }}
      >
        Psique
      </h2>
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{
        lineHeight: '64px',
      }}
    >
      <Menu.Item key="/explore">
        <Link to="/explore">Explorar</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/">Dashboard</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default withRouter(Header);
