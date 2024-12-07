import React, { useEffect, useState } from 'react';
import { Upload, message} from 'antd';
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
        const token = localStorage.getItem("access_token")
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/user`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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


  const handleUpload = async (file) => {
    const token = localStorage.getItem("access_token");

    const formData = new FormData();
    formData.append('profile_photo', file);

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/user/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUser((prevState) => ({
          ...prevState,
          profilePhoto: data.profile_photo, 
        }));
        message.success('Profile photo uploaded successfully');
      } else {
        message.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      message.error('An error occurred while uploading the photo.');
    }
  };




  const handleLogout = () => {
    console.log('logout')
    localStorage.removeItem('access_token');
    navigate('/');
};


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
          <img src={`${process.env.REACT_APP_BASE_URL}${user.profilePhoto}`} alt="Profile" style={{ width: '100%' }} />
        ) : (
          <p>No profile photo uploaded.</p>
        )}
  </div>


  <Upload
  beforeUpload={handleUpload}
  name="profile_photo">
    <button>Upload Photo</button>
  </Upload>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    
  );
}

export default User;
