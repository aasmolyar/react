import React from 'react';

const UserPhoto = (props) => {

    return(
        <div className='UserPhoto'>
            <img src={props.photo} alt="userPhoto" />
        </div>
    )
}

export default UserPhoto;
