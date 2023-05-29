import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Profile/MyPosts/MyPosts';

const Profile = () => {
    return (
      <div>
        <div>
          <img className={s.mainPicture} src="https://t-toner.ru/wa-data/public/site/data/contact_us.jpg" alt="main" />
        </div>
        <div>
           avatar + description
        </div>
      <MyPosts />
      </div>
    )
}

export default Profile
