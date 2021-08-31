import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Messenger.module.css';

// сюда приходит объект, включающий id, avatar, user и content
const Message = props => {
	return (
		<div className={styles.Item}>
			<Link to={props.id} className={styles.Avatar}>
				<img src={props.avatar} alt='' />
				{props.user}
			</Link>
			<div>{props.content}</div>
		</div>
	);
};

export default Message;
