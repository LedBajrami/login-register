import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await login(values.email, values.password);
      navigate('/user');
    } catch (error) {
      setMessage('Invalid credentials, please try again.');
      console.error(error)
    }
  };

  return (
    <div style={{ width: '300px', marginInline: 'auto', paddingBlock: '50px' }}>
      <h2>Login</h2>
      <Form name="login_form" layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p style={{ color: 'red' }}>{message}</p>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
