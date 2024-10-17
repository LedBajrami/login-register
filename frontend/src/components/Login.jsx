import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')


  const handleSubmit = async () => {
    
  }


  return (
    <div style={{ width: '300px', marginInline: 'auto', paddingBlock: "50px"}}>
      <h2>Login</h2>
      <Form
        name="login_form"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p  style={{color: 'red'}}>{message}</p>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
