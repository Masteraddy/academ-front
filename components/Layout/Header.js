import { Avatar, Badge, Layout, List, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import DashHeader, { Notification } from '../styles/Header';
import { useAppState } from '../shared/AppProvider';
import { useStoreActions } from 'easy-peasy';

import Link from 'next/link';

const { SubMenu } = Menu;
const { Header } = Layout;

const MainHeader = (props) => {
  const [state, dispatch] = useAppState();
  const signOut = useStoreActions((a) => a.auth.signOut);

  return (
    <DashHeader>
      <Header>
        {state.mobile && (
          <a
            onClick={() => dispatch({ type: 'mobileDrawer' })}
            className='trigger'
          >
            <MenuOutlined />
          </a>
        )}
        <Link href='/'>
          <a className='brand'>
            <img
              src='/images/logo.png'
              alt='green facilities ltd'
              style={{ height: '45px' }}
            />
          </a>
        </Link>

        <Menu mode='horizontal' className='menu-divider'>
          {!state.mobile && (
            <Menu.Item>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href='/service'>
                <a>Service</a>
              </Link>
            </Menu.Item>
          )}
        </Menu>

        <span className='mr-auto' />

        <Menu mode='horizontal'>
          <SubMenu title={<Avatar src={'/static/images/avatar.jpg'} />}>
            <Menu.Item>
              <Link href='/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={() => signOut()}>Signout</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </DashHeader>
  );
};

export default MainHeader;
