import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import Link from 'next/link';
import routes from '../../libs/routes';

const data = [
  {
    path: '/school/roles',
    name: 'Roles',
  },
  {
    path: '/school/staffs',
    name: 'Staffs',
  },
];

const Dashboard = () => {
  return (
    <div style={{ minHeight: '80vh' }}>
      <Row gutter={12}>
        {data.map((e) => (
          <Col span={12} style={{ marginBottom: 12 }}>
            <Link href={e.path}>
              <Card hoverable style={{ textAlign: 'center' }}>
                <Statistic title={e.name} value={0} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
