import { action, thunk } from 'easy-peasy';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { message } from 'antd';
import redirect from 'next-redirect';
import api, { localUse } from '../../libs/api';

const Models = {
  staffs: [],

  addStaffs: action((state, payload) => {
    // console.log(state);
    state.staffs = payload;
  }),

  getStaffs: thunk(async (actions, payload) => {
    api
      .get('/api/staff')
      .then((res) => {
        let data = res.data.result

        data.forEach(dt => {
          dt.rolein = dt.role.name
          dt.dateofbirth = new Date(dt.dob).toDateString();
          return dt
        })
        actions.addStaffs(data);
      })
      .catch((error) => message.error(error.response.data.message));
  }),
};

export default Models;
