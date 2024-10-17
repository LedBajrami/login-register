import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), 
      });

      const data = await response.json();

      if (response.status === 401) {
        setMessage('Unauthorized: Incorrect email or password'); 
      } else if (response.status === 200) {
        navigate('/profile');
      } else {
        setMessage('Wrong credentials, please try again');
        console.error(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Fetch error:', error);
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
