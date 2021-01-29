import { action, thunk } from 'easy-peasy';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { message } from 'antd';
import auth from './auth';
import roles from './roles';
import staffs from './staffs';

const Models = {
  name: 'Academiks App',
  auth,
  roles,
  staffs,
};

export default Models;
