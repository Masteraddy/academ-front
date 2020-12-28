// import "../assets/styles.less";

// import App from 'next/app';
import { Fragment, useState } from "react";
import redirect from "next-redirect";
import absoluteUrl from "next-absolute-url";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { makeStore } from '../redux';
// import {
// 	getCookie,
// 	getUser,
// 	getUserLocal,
// 	getUsersLocal,
// 	getServices,
// 	getServicesLocal,
// 	getRequestLocal,
// 	getOutRequestLocal,
// 	getLocationLocal,
// 	getPropertyLocal,
// } from '../redux/actions';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};
// }

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const userAgent = ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;
  const { origin } = absoluteUrl(ctx.req);
  const hostname = origin;

  let ie = false;
  if (userAgent.match(/Edge/i) || userAgent.match(/Trident.*rv[ :]*11\./i)) {
    ie = true;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx, hostname);
  }

  pageProps.query = ctx.query;
  pageProps.ieBrowser = ie;

  return { pageProps };
};

export default MyApp;
// export default withRedux(makeStore)(MyApp);
