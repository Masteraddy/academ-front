import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import Link from 'next/link';
// import routes from '../../libs/routes';
// import store from '../../redux'
import { useStoreState } from 'easy-peasy';

const Dashboard = () => {

  const roles = useStoreState((o) => o.roles.roles);
  const staffs = useStoreState((o) => o.staffs.staffs);

  const data = [
    {
      path: '/school/roles',
      name: 'Roles',
      stat: roles.length
    },
    {
      path: '/school/staffs',
      name: 'Staffs',
      stat: staffs.length
    },
  ]

  return (
    <div style={{ minHeight: '80vh' }}>
      <Row gutter={12}>
        {data.map((e) => (
          <Col span={12} style={{ marginBottom: 12 }}>
            <Link href={e.path}>
              <Card hoverable style={{ textAlign: 'center' }}>
                <Statistic title={e.name} value={e.stat} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
