import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { loginUser } from '../../redux/slices/authThunks';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const errorMessage = useSelector((state) => state.auth.error)
  const status = useSelector((state) => state.auth.status)

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(loginUser(values)).unwrap()
      dispatch(setUser(data.user))
      navigate('/user');
    } catch (error) {
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
          <Button type="primary" htmlType="submit" block disabled={status === 'loading'}>
            {status == 'loading' ? "Redirecting to youy account": "Login"}
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
