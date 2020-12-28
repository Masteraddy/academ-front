import dynamic from "next/dynamic";
import Link from "next/link";
import { Layout } from "antd";
import menuRoutes from "../libs/routes";

const { Header, Sider, Content, Footer } = Layout;
const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
  ssr: false,
});

const menuHeaderRender = (logoDom, titleDom, props) => (
  <Link href="/">
    <a style={{ margin: "auto" }}>
      {logoDom}
      {/* {!props?.collapsed && titleDom} */}
    </a>
  </Link>
);

const menuItemRender = (options, element) => (
  <Link href={options.path}>
    <a>{element}</a>
  </Link>
);

export default function Main({ children }) {
  return (
    <ProLayout
      navTheme="light"
      logo={
        <Link href="/">
          <div
            className="logo"
            style={{
              backgroundColor: "grey",
              height: 40,
              width: 80,
            }}
          />
        </Link>
      }
      title="Academiks"
      headerTheme="light"
      style={{ minHeight: "100vh" }}
      route={menuRoutes}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
    >
      {children}
      <Footer>footer</Footer>
    </ProLayout>
  );
}
