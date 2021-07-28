import React from "react";
import styles from "./ProfileHeader.module.css";
import Avatar from "./../../Avatar/Avatar";

const ProfileHeader = (props) => {
  return (
    <header className={styles.Header}>
      {/* блок с именем и аватаркой */}
      <div className={styles.UserInfoWrapper}>
        <a href="" className={styles.UserAvatar}>
          {/* аватарка пользователя */}
          <Avatar />
        </a>
        {/* Имя пользователя */}
        <h3 className={styles.UserName}>{props.name}</h3>
      </div>
    </header>
  );
};

export default ProfileHeader;
