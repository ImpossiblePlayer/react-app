import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../Messenger.module.css';

// сюда приходит объект, включающий
const DialogItem = props => {
	return (
		<div className={styles.Item}>
			<NavLink
				to={`/messenger/${props.id}`}
				className={styles.Link}
				activeClassName={styles.Active}
			>
				{props.user}
			</NavLink>
		</div>
	);
};

export default DialogItem;
