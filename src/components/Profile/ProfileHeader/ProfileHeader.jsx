import React from 'react';

import styles from './ProfileHeader.module.css';

const ProfileHeader = props => {
	return (
		<header className={styles.Header}>
			{/* блок с именем и аватаркой */}
			<div className={styles.UserInfoWrapper}>
				<a href='' className={styles.UserAvatar}>
					{/* аватарка пользователя */}
					{props.state.userData.avatar}
				</a>
				{/* Имя пользователя */}
				<h3 className={styles.UserName}>{props.state.userData.userName}</h3>
			</div>
		</header>
	);
};

export default ProfileHeader;
