import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
      <div>
        <div>
          <img className={s.mainPicture} src="https://t-toner.ru/wa-data/public/site/data/contact_us.jpg" alt="main" />
        </div>
        <div  className={s.descriptionBlock}>
           avatar + description
        </div>
      </div>
    )
}

export default Profileinfo
