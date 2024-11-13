import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/userService';
import { logout } from '../../services/authService';
import UserPhotoUpload from './UserPhotoUpload';



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
        const data = await getUser()
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


  const handleLogout =  async () => {
    await logout()
    navigate('/');
};



  return (
    <div style={{ width: '400px', marginInline: 'auto', paddingTop: '50px' }}>
      
      <h2>User Profile</h2>

      <div className='user-info-container' style={{display: "flex", justifyContent: "start", alignItems: "center", marginBlock: "20px"}}>
      <div style={{width: "15%"}}>
          {user.profilePhoto ? (
            <img src={`${process.env.REACT_APP_BASE_URL}${user.profilePhoto}`} alt="Profile" style={{ width: '100%', borderRadius: "50%", aspectRatio: "1" }} />
          ) : (
            <p>No profile photo uploaded.</p>
         )}
       </div>
       <div style={{paddingLeft: "20px"}}>
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
       </div>
      </div>

      <UserPhotoUpload user={user} setUser={setUser}/>
      
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    
  );
}

export default User;
