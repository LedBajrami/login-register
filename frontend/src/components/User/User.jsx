import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/userService';
import UserPhotoUpload from './UserPhotoUpload';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { logout } from '../../redux/slices/authSlice';
import { fetchUser } from '../../redux/slices/userThunks';
import { Spin } from 'antd';



function User() {
  const {loading, name, email, profilePhoto} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
        dispatch(fetchUser());
    }
}, [dispatch]);


  const handleLogout =  async () => {
    dispatch(logout())
    navigate('/');
};



  return (
   <Spin spinning={loading} size="large" >
    <div style={{ width: '400px', marginInline: 'auto', paddingTop: '50px' }}>
      
      <h2>User Profile</h2>

      <div className='user-info-container' style={{display: "flex", justifyContent: "start", alignItems: "center", marginBlock: "20px"}}>
      <div style={{width: "15%"}}>
          {profilePhoto ? (
            <img src={`${process.env.REACT_APP_BASE_URL}${profilePhoto}`} alt="Profile" style={{ width: '100%', borderRadius: "50%", aspectRatio: "1" }} />
          ) : (
            <p>No profile photo uploaded.</p>
         )}
       </div>
       <div style={{paddingLeft: "20px"}}>
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Email:</strong> {email}</div>
       </div>
      </div>

      <UserPhotoUpload/>
      
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    </Spin>   
  );
}

export default User;
