import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import DashboardLayout from './Dashboard';
import OtherLayout from './Other';
import { useStoreState, useStoreActions } from 'easy-peasy';
// import PageLayout from './Page';
import store from '../redux'
import { Layout } from 'antd';
import { parseCookies } from 'nookies';

const { Content } = Layout;

const LayoutComp = ({ layout, children, pagename }) => {
  const sitename = useStoreState((o) => o.name);
  const getRoles = store.getActions().roles.getRoles;
  const getStaffs = store.getActions().staffs.getStaffs;
  const getLoggedUser = store.getActions().auth.getLoggedUser;
  useEffect(() => {
    if (parseCookies(null).token) {
      getLoggedUser();
      getRoles();
      getStaffs();
    }
  });
  return (
    <React.Fragment>
      <Head>
        <meta
          name='viewport'
          content='user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height'
        />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='shortcut icon' href='/images/logo.png' />
        <link
          href='https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='/css/nprogress.css' />
        <title>{`${pagename ? pagename : null} - ${
          sitename ? sitename : 'Academiks'
        }`}</title>
      </Head>
      {layout === 'dashboard' ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <Fragment>
          {layout === 'other' ? (
            <OtherLayout>{children}</OtherLayout>
          ) : (
            <Content>{children}</Content>
          )}
        </Fragment>
      )}
    </React.Fragment>
  );
};

export default LayoutComp;
