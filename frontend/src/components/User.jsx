import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


function User() {
  const [user, setUser] = useState({
    name: '', 
    email: '', 
    profilePhoto: null,
  });

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/user`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
    
        const data = await response.json();
        setUser({
          name: data.name,
          email: data.email,
          profilePhoto: data.profile_photo || null,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    fetchUserData();
  }, [navigate]);


  const handleUpload = () => {
    
  }


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
        {user.profilePhoto ? (
          <img src={user.profilePhoto} alt="Profile" style={{ width: '100%' }} />
        ) : (
          <p>No profile photo uploaded.</p>
        )}
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
