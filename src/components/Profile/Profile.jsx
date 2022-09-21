import React from 'react';

import styles from './Profile.module.css';

import ProfileHeader from './ProfileHeader';
import UserPosts from './UserPosts';

const Profile = (props) => {
	return (
		<div className={styles.Content}>
			{/* блок с именем и аватаркой */}
			<ProfileHeader state={props.state} />

			{/* блок с постами пользователя и создание нового поста */}
			<UserPosts state={props.state} funcs={props.funcs} />
		</div>
	);
};

export default Profile;
