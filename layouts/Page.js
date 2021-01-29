import { Container, Inner } from '../components/styles/Page';
import { Layout, Spin } from 'antd';
import { useEffect, useState } from 'react';
import AppProvider from '../components/shared/AppProvider';
import { GlobalStyles, theme } from '../components/styles/GlobalStyles';

import Header from '../components/Layout/Header';
import SidebarMenu from '../components/Layout/SidebarMenu';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles/GlobalStyles';
import { useAppState } from '../components/shared/AppProvider';
import { unAuthRoute } from '../libs/routes';
import Router, { withRouter } from 'next/router';

const { Content } = Layout;

const Page = ({ router, children }) => {
  const [loading, setLoading] = useState(true);
  const [state] = useAppState();
  const [active, setActive] = useState(false);
  Router.events.on('routeChangeStart', () => setActive(true));
  Router.events.on('routeChangeComplete', () => setActive(false));
  Router.events.on('routeChangeError', () => setActive(false));
  const isNotDashboard = unAuthRoute.includes(router.pathname);
  console.log(state);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <Spin tip='Loading...' size='large' spinning={active}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <GlobalStyles />
          <Container
            className={`${state.weakColor ? 'weakColor' : ''} ${
              state.boxed ? 'boxed shadow-sm' : ''
            }`}
          >
            {!isNotDashboard && <Header />}
            <Layout className='workspace'>
              {!isNotDashboard && (
                <SidebarMenu
                  sidebarTheme={state.darkSidebar ? 'dark' : 'light'}
                  sidebarMode={state.sidebarPopup ? 'vertical' : 'inline'}
                  sidebarIcons={state.sidebarIcons}
                  collapsed={state.collapsed}
                />
              )}

              <Layout>
                <Content>
                  {!isNotDashboard ? <Inner>{children}</Inner> : children}
                </Content>
              </Layout>
            </Layout>
          </Container>
        </AppProvider>
      </ThemeProvider>
    </Spin>
  );
};

export default withRouter(Page);
