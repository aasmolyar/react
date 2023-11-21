import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profileinfo = ({profile, status, updateStatus}) => {

    if (!profile) {
      return <Preloader />
    }
    
    return (
      <div>
        
        <div  className={s.descriptionBlock}>
          <img src={profile.photos.large} alt="" />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

           <div className='profileUserId'>
             userId - {profile.userId}
           </div>

           <div className='ProfileLookingForAJobDescription'>
             lookingForAJobDescription - {profile.lookingForAJobDescription}  
           </div>
           
        </div>
      </div>
    )
}

export default Profileinfo
