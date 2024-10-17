import React, { useState } from 'react';
import { Upload } from 'antd';
import { Link } from 'react-router-dom';


function User() {
  const [user, setUser] = useState({
    name: '', 
    email: '', 
    profilePhoto: null,
  });


  return (
    <div style={{ width: '400px', marginInline: 'auto', paddingTop: '50px' }}>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {user.name} 
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>

      <div>
        <strong>Profile Photo:</strong>
        <img src={user.profilePhoto} alt="Profile" style={{ width: '100%' }} />
  </div>


  <Upload name="profile_photo">
    <button>Upload Photo</button>
  </Upload>
      <div>
        <p><Link to="/">Logout</Link></p>
      </div>
    </div>
    
  );
}

export default User;
