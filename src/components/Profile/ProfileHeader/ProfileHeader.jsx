import React from "react";
import styles from "./ProfileHeader.module.css";
import avatar from "./avatar.jpg";

const ProfileHeader = () => {
  return (
    <header className={styles.ProfileHeader}>
      <div className={styles.UserNameWrapper}>
        <div className={styles.Logo}>
          <img src={avatar} alt={`Аватарка пользователя `} />
        </div>
        <h3 className={styles.UserName}>Пронин Иван</h3>
      </div>
    </header>
  );
};

export default ProfileHeader;
