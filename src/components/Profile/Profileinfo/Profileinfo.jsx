import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const Profileinfo = (props) => {

    if (!props.profile) {
      return <Preloader />
    }

    return (
      <div>
        <div>
          <img className={s.mainPicture} src="https://t-toner.ru/wa-data/public/site/data/contact_us.jpg" alt="main" />
        </div>
        <div  className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt="" />
           avatar + description
        </div>
      </div>
    )
}

export default Profileinfo
