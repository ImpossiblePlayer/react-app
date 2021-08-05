import React from "react";
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { Posts } from "./Posts/Posts.jsx";
import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={styles.Content}>
			{/* блок с именем и аватаркой */}
			<ProfileHeader name='Пронин Иван' />

			{/* блок с постами пользователя и создание нового поста */}
			<Posts />
		</div>
	);
};

export default Profile;
