import {
  MenuOutlined,
  HomeOutlined,
  SmileOutlined,
  SettingOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const menuRoutes = {
  path: "/",
  routes: [
    {
      path: "/",
      name: "Home",
      icon: <HomeOutlined />,
    },
    {
      path: "/otherpages",
      name: "OtherPages",
      icon: <SmileOutlined />,
      routes: [
        {
          path: "/other",
          name: "Other",
          icon: <SettingOutlined />,
        },
      ],
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <DashboardOutlined />,
    },
  ],
};

export default menuRoutes;
