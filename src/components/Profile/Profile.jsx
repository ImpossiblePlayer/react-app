import React from 'react';

import styles from './Profile.module.css';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import UserPosts from './Posts/UserPosts.jsx';

const Profile = props => {
	return (
		<div className={styles.Content}>
			{/* блок с именем и аватаркой */}
			<ProfileHeader state={props.state} />

			{/* блок с постами пользователя и создание нового поста */}
			<UserPosts state={props.state} />
		</div>
	);
};

export default Profile;
