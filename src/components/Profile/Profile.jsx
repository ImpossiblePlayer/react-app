import React from "react";
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Allposts from "./AllPosts/AllPosts";
import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<main className={styles.Content}>
			<ProfileHeader name='Пронин Иван' />
			<Allposts />
		</main>
	);
};

export default Profile;
