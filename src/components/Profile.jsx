import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Profile/MyPosts/MyPostsContainer';
import Profileinfo from './Profile/Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
      <div>
        <Profileinfo />
        <MyPostsContainer store = {props.store} />
      </div>
    )
}

export default Profile
