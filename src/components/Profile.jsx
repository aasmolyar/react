import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Profile/MyPosts/MyPosts';
import Profileinfo from './Profile/Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
      <div>
        <Profileinfo />
        <MyPosts posts = {props.profilePage.posts}
                 newPostText = {props.profilePage.newPostText}
                 dispatch={props.dispatch} />
      </div>
    )
}

export default Profile
