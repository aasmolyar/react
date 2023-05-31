import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Profile/MyPosts/MyPosts';
import Profileinfo from './Profile/Profileinfo/Profileinfo';

const Profile = () => {
    return (
      <div>
        <Profileinfo />
        <MyPosts />
      </div>
    )
}

export default Profile
