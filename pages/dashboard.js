import Layout from '../layouts';
import { Button } from 'antd';
import redirect from 'next-redirect';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Dashboard from '../components/Pages/Dashboard';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export default function Example() {
  const test = useStoreState((o) => o.test);
  const protectAuth = useStoreActions((a) => a.auth.protectAuth);

  return (
    <Layout pagename='Dashboard' layout='dashboard'>
      <Dashboard />
    </Layout>
  );
}
Example.getInitialProps = ({ req, res, store }) => {
  store.getActions().auth.protectAuth({ req, res });
  return { data: 'hello' };
};
