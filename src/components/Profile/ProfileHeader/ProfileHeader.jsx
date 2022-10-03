import React from 'react';

import styles from './ProfileHeader.module.css';
import { Link } from 'react-router-dom';

const ProfileHeader = (props) => {
	return (
		<header className={styles.Header}>
			{/* блок с именем и аватаркой */}
			<div className={styles.UserInfoWrapper}>
				<Link to='' className={styles.UserAvatar}>
					{/* аватарка пользователя */}
					{props.state.userData.avatar}
				</Link>
				{/* Имя пользователя */}
				<h3 className={styles.UserName}>{props.state.userData.userName}</h3>
			</div>
		</header>
	);
};

export { ProfileHeader };
