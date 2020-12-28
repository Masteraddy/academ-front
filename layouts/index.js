import React from "react";
import Head from "next/head";
import DashboardLayout from "./Dashboard";
import OtherLayout from "./Other";

const Layout = ({ layout, children }) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="stylesheet" href="/css/nprogress.css" />
        <title>Academiks</title>
      </Head>
      {layout === "dashboard" ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <OtherLayout>{children}</OtherLayout>
      )}
    </React.Fragment>
  );
};

export default Layout;
