import React from "react";
import Allposts from "./AllPosts/AllPosts";
import styles from "./Profile.module.css";
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = () => {
  return (
    <main className={styles.Content}>
      <ProfileHeader name='Пронин Иван' />
      <Allposts />
    </main>
  );
};

export default Profile;
