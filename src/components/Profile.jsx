import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './Profile/MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={classes.content}>
    <div>
    <img src="https://t-toner.ru/wa-data/public/site/data/contact_us.jpg" alt="main" />
    </div>
    <div>
      avatar + description
      </div>
      <MyPosts />
  </div>
    )
}

export default Profile
