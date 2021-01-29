import React, { Fragment, useRef, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { capitalize } from '../../libs/helpers';
import { PlusOutlined } from '@ant-design/icons';
import StudentTable from '../Tables/Student';
import RolesTable from '../Tables/Role';
import StaffsTable from '../Tables/Staffs';

const Request = ({ request, states }) => {
  const roles = useStoreState((o) => o.roles.roles);
  const staffs = useStoreState((o) => o.staffs.staffs);
  // console.log(roles, staffs);
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  // console.log(states, roles);
  return (
    <Fragment>
      {request == 'students' && <StudentTable data={data} />}
      {request == 'roles' && (
        <RolesTable title={capitalize(request)} data={roles} />
      )}
      {request == 'staffs' && (
        <StaffsTable title={capitalize(request)} data={staffs} />
      )}
    </Fragment>
  );
};

export default Request;
