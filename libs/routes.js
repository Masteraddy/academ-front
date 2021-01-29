import {
  MenuOutlined,
  HomeOutlined,
  SmileOutlined,
  SettingOutlined,
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { parseCookies, setCookie, destroyCookie } from 'nookies';

const unAuthRoute = [
  '/signin',
  '/signup',
  '/forgot',
  '/lockscreen',
  '/_error',
  '/reset',
];

const authRoute = [
  '/dashboard',
  '/event',
  '/school',
  '/school/roles',
  '/school/staffs',
];

const menuRoutes = () => {
  let token = parseCookies(null).token;
  let solnRoute = [];

  let allRoutes = [
    {
      path: '/',
      name: 'Home',
      icon: <HomeOutlined />,
    },
    {
      path: '/otherpages',
      name: 'OtherPages',
      icon: <SmileOutlined />,
      routes: [
        {
          path: '/other',
          name: 'Other',
          icon: <SettingOutlined />,
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <DashboardOutlined />,
    },
    {
      path: '/school',
      name: 'School',
      icon: <SmileOutlined />,
      routes: [
        {
          path: '/school/roles',
          name: 'Roles',
          icon: <SettingOutlined />,
        },
        {
          path: '/school/staffs',
          name: 'Staffs',
          icon: <SettingOutlined />,
        },
      ],
    },
    {
      path: '/signin',
      name: 'Sign In',
      icon: <UserOutlined />,
    },
  ];

  let mainRoutes = {
    path: '/',
    routes: allRoutes,
  };

  solnRoute = token
    ? allRoutes.filter((dt) => !unAuthRoute.includes(dt.path))
    : allRoutes.filter((dt) => !authRoute.includes(dt.path));

  mainRoutes.routes = solnRoute;

  return mainRoutes;
};

let routess = menuRoutes;

export { authRoute, unAuthRoute };
export default routess;
