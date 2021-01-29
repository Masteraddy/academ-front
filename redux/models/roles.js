import { action, thunk } from 'easy-peasy';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { message } from 'antd';
import redirect from 'next-redirect';
import api, { localUse } from '../../libs/api';

const Models = {
  roles: [],

  addRoles: action((state, payload) => {
    // console.log(state);
    state.roles = payload;
  }),

  getRoles: thunk(async (actions, payload) => {
    api
      .get('/api/role')
      .then((res) => {
        actions.addRoles(res.data.result);
      })
      .catch((error) => message.error(error.response.data.message));
  }),
};

export default Models;
