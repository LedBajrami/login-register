import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

function Register() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { name, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      await register(values);
      navigate('/login'); 
    } catch (error) {
      if (error.message.includes("The email has already been taken.")) {
        setMessage("This email is already taken. Please use a different one.");
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div style={{ width: '300px', marginInline: 'auto', paddingBlock: '50px' }}>
      <h2>Register</h2>
      <Form
        name="register_form"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter a valid email!', type: 'email' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create Account
          </Button>
        </Form.Item>
      </Form>

    <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
