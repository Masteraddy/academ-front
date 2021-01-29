import { Layout, Menu, Avatar } from 'antd';
import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import ResponsiveAntMenu from '../components/ResponsiveAntMenu';
import DashHeader from '../components/styles/Header';
import { Container, Inner } from '../components/styles/Page';
import {
  MenuOutlined,
  CloseOutlined,
  SmileOutlined,
  SettingOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import menuRoutes from '../libs/routes';

const { Header, Sider, Content, Footer } = Layout;
const PageContainer = dynamic(
  () => import('@ant-design/pro-layout/lib/PageContainer'),
  {
    ssr: false,
  },
);

const routeMenu = () =>
  menuRoutes().routes.map((route, index) => {
    const hasChildren = route.routes ? true : false;
    if (!hasChildren)
      return (
        <Menu.Item key={route.path} className={'menu-home'}>
          <Link href={route.path}>
            <a>{route.name}</a>
          </Link>
        </Menu.Item>
      );
    if (hasChildren)
      return (
        <Menu.SubMenu key={route.path} title={route.name}>
          {route.routes.map((subitem, index) => (
            <Menu.Item key={subitem.path} className={'menu-home'}>
              <Link href={subitem.path}>
                <a>{subitem.name}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
  });

class OtherLayout extends Component {
  state = {
    collapsed: true,
    broken: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    // console.log(menuRoutes().routes);
    return (
      <Layout>
        <Header
          className='site-layout-background'
          theme='light'
          style={{
            padding: 0,
            position: 'fixed',
            width: '100%',
            backgroundColor: 'white',
            // position: "relative",
            flexDirection: 'row',
            flexWrap: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            minHeight: '3rem',
            zIndex: 11,
            paddingRight: '1rem',
            boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <div
            className='logo'
            style={{
              backgroundColor: 'grey',
              height: 40,
              width: 80,
              margin: '8px',
            }}
          />
          <span style={{ marginRight: 'auto' }}></span>
          <ResponsiveAntMenu
            activeLinkKey={this.props.router.pathname}
            mobileMenuContent={(isMenuShown) =>
              isMenuShown ? <CloseOutlined /> : <MenuOutlined />
            }
            mode={(isMobile) => (isMobile ? 'vertical' : 'horizontal')}
            menuClassName={'responsive-ant-menu'}
            mobileBreakPoint={768}
          >
            {(onLinkClick) => <Menu>{routeMenu()}</Menu>}
          </ResponsiveAntMenu>
        </Header>
        <PageContainer
          content={
            <div>
              {this.props.children}
              <Footer>footer</Footer>
            </div>
          }
        />
      </Layout>
    );
  }
}

export default withRouter(OtherLayout);
