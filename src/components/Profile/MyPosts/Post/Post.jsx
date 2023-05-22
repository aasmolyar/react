import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
          <img src="https://avatars.mds.yandex.net/i?id=7199f50d1f31f1e87eaff6eba4668897d2043a42-7763867-images-thumbs&n=13" alt="avatar" />
          post 1
          <div>
            <span>Like</span>
          </div>
          <div>
            <span>Dislike</span>
          </div>
        </div>
    )
}

export default Post
