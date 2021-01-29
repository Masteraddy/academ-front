import React, { useRef, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { capitalize } from '../../libs/helpers';
import Layout from '../../layouts';
import { PlusOutlined } from '@ant-design/icons';
import StudentTable from '../../components/Tables/Student';
import RolesTable from '../../components/Tables/Role';
import StaffsTable from '../../components/Tables/Staffs';
import Request from '../../components/Pages/Request';

const RequestPage = ({ request, states }) => {
  // console.log(states);
  return (
    <Layout pagename={capitalize(request)} layout='dashboard'>
      <Request request={request} states={states} />
      {/* {request} */}
    </Layout>
  );
};

RequestPage.getInitialProps = async ({ req, res, store, query }) => {
  store.getActions().auth.protectAuth({ req, res });
  const stores = store.getState();
  return {
    request: query.request,
    states: stores,
  };
};

export default RequestPage;
