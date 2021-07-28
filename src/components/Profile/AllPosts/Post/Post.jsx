import React from 'react'
import styles from './Post.module.css';
import Avatar from '../../../Avatar/Avatar';

const Post = (props) => {
  return (
    <div className={styles.Item}>
      <div className={styles.InfoWrapper}>
        <span className={styles.UserLogo}>
          {/* аватарка пользователя */}
          <Avatar />
        </span>
        {/* Имя пользователя */}
        <span className={styles.UserName}>
          {props.name}
        </span>
        <span className={styles.PublTime}>
          {new Date().toLocaleTimeString()}
        </span>
      </div>
      
      <div className={styles.Content}>
        {/* текст поста */}
        <p>
          {/* пользовательское Текст */}
          {props.content}
        </p>
        {/* картинки (если есть) */}
        {/* <div className={styles.PostImages}>

        </div> */}
      </div>
    </div>
  );
};

export default Post;
