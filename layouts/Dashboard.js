import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Layout, Avatar, Menu, Popover } from 'antd';
import menuRoutes from '../libs/routes';
import { useState } from 'react';
// import {PageContainer, SettingDrawer} from '@ant-design/pro-layout'
import { UserOutlined } from '@ant-design/icons';
import store from '../redux'

const { Header, Sider, Content, Footer } = Layout;
const ProLayout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
});

const PageContainer = dynamic(
  () => import('@ant-design/pro-layout/lib/PageContainer'),
  {
    ssr: false,
  },
);

const menuHeaderRender = (logoDom, titleDom, props) => (
  <Link href='/'>
    <a style={{ margin: 'auto' }}>
      {logoDom}
      {/* {!props?.collapsed && titleDom} */}
    </a>
  </Link>
);

const menuItemRender = (options, element) => (
  <Link href={options.path}>
    <a>{element}</a>
  </Link>
);

const menuToRender = (logOut) => (
  <Menu>
    <Menu.Item className={'menu-home'}>
      <Link href={'/profile'}>
        <a>Profile</a>
      </Link>
    </Menu.Item>
    <Menu.Item onClick={(e) => logOut()} className={'menu-home'}>
      Logout
    </Menu.Item>
  </Menu>
);

export default function Main({ children }) {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const signOut = store.getActions().auth.signOut;
  return (
    <ProLayout
      // navTheme="light"
      logo={
        <Link href='/'>
          <a>
            <div
              className='logo'
              style={{
                backgroundColor: 'grey',
                height: 40,
                width: 80,
              }}
            />
          </a>
        </Link>
      }
      title='Academiks'
      // headerTheme="light"
      style={{ minHeight: '100vh' }}
      route={menuRoutes()}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
      rightContentRender={() => (
        <Menu mode='horizontal'>
          <Menu.SubMenu
            title={
              <Avatar shape='square' size='large' icon={<UserOutlined />} />
            }
          >
            <Menu.Item>
              <Link href='/profile'>
                <a>Profile</a>
              </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={() => signOut()}>Sign Out</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      )}
    >
      <div>
        {children}
        <Footer>Footer</Footer>
      </div>
    </ProLayout>
  );
}
