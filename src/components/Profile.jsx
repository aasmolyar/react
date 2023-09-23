import React from 'react';
import MyPostsContainer from './Profile/MyPosts/MyPostsContainer';
import Profileinfo from './Profile/Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
      <div>
        <Profileinfo profile={props.profile} />
        <MyPostsContainer store = {props.store} />
      </div>
    )
}

export default Profile
