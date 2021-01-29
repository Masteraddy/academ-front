import { action, thunk } from 'easy-peasy';
import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { message } from 'antd';
import redirect from 'next-redirect';
import api, { localUse } from '../../libs/api';

const Models = {
  authuser: {},

  addAuthUser: action((state, payload) => {
    // console.log(state);
    state.authuser = payload;
  }),

  protectAuth: thunk((actions, payload) => {
    const cookies = parseCookies(payload);
    if (!cookies.token) return redirect(payload, '/signin');
  }),

  blockAuth: thunk((actions, payload) => {
    const cookies = parseCookies(payload);
    if (cookies.token) return redirect(payload, '/dashboard');
  }),

  signIn: thunk(async (action, payload) => {
    let values = { email: payload.email, password: payload.password };
    api
      .post('/api/auth', values)
      .then((res) => {
        setCookie(null, 'token', res.data.token);
        message.success('Logging Successfully');
        Router.push('/dashboard');
      })
      .catch((error) => message.error(error.response.data.message));
  }),

  getLoggedUser: thunk(async (actions, payload) => {
    localUse(payload)
      .get('/api/auth')
      .then((res) => {
        // console.log(res.data);
        actions.addAuthUser(res.data.result);
      })
      .catch((error) => {
        Router.push('/login')
        message.error(error.response.data.message)
      });
  }),

  signOut: action((state, payload) => {
    destroyCookie(null, 'token');
    nookies.destroy(null, 'token')
    state.authuser = {};
    Router.push('/');
    message.success('Logged Out Successfully');
  }),
};

export default Models;
