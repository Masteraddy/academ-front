import '../assets/styles.less';

import { Fragment, useState } from 'react';
import absoluteUrl from 'next-absolute-url';
import { Spin, ConfigProvider } from 'antd';
import Router from 'next/router';

import { StoreProvider, useStore } from 'easy-peasy';
import withRedux from 'next-redux-wrapper';
import { parseCookies } from 'nookies';
import reduxstore, { makeStore } from '../redux';
import enUSIntl from 'antd/lib/locale/en_US';

const MyApp = ({ Component, pageProps, store }) => {
  const [active, setActive] = useState(false);
  Router.events.on('routeChangeStart', () => setActive(true));
  Router.events.on('routeChangeComplete', () => setActive(false));
  Router.events.on('routeChangeError', () => setActive(false));

  return (
    <ConfigProvider locale={enUSIntl}>
      <Spin
        tip='Loading...'
        size='large'
        wrapperClassName='spin-class'
        spinning={active}
      >
        <StoreProvider store={reduxstore}>
          <Component {...pageProps} />
        </StoreProvider>
      </Spin>
    </ConfigProvider>
  );
};
// }

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const userAgent = ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent;
  const { origin } = absoluteUrl(ctx.req);
  const hostname = origin;
  let ie = false;
  if (userAgent.match(/Edge/i) || userAgent.match(/Trident.*rv[ :]*11\./i)) {
    ie = true;
  }

  let token = parseCookies(ctx).token;
  // // console.log(ctx);
  if (token) {
    ctx.store.getActions().auth.getLoggedUser({ req: ctx.req, res: ctx.res });
    ctx.store.getActions().roles.getRoles({ req: ctx.req, res: ctx.res });
    ctx.store.getActions().staffs.getStaffs({ req: ctx.req, res: ctx.res });
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx, hostname);
  }
  pageProps.query = ctx.query;
  pageProps.ieBrowser = ie;

  return { pageProps };
};

// export default MyApp;
export default withRedux(makeStore)(MyApp);
