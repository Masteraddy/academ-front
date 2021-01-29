import Layout from '../layouts';
import { Button, Checkbox, Form, Input, message, Row } from 'antd';
import { EyeOutlined, MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import api from '../libs/api';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';
import redirect from 'next-redirect';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

import Link from 'next/link';
import Router from 'next/router';

const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;

const SignIn = () => {
  const signIn = useStoreActions((a) => a.auth.signIn);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout pagename='Sign In' layout={'other'}>
      <Row
        type='flex'
        align='middle'
        justify='center'
        className='px-3 bg-white mh-page'
        style={{ minHeight: '80vh' }}
      >
        <Content>
          <Form
            layout='vertical'
            initialValues={{
              remember: true,
            }}
            onFinish={signIn}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'Enter a valid E-mail',
                },
              ]}
            >
              <Input type='email' />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button block type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Row>
    </Layout>
  );
};

SignIn.getInitialProps = ({ req, res, store }) => {
  store.getActions().auth.blockAuth({ req, res });
  return { data: 'hello' };
};

export default SignIn;
