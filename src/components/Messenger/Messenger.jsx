import React from 'react';
import styles from './Messenger.module.css';

const Messenger = () => {
	return (
		<div className={styles.Messenger}>
			<div className={styles.Messages}></div>
			<div className={styles.Dialogs}></div>
		</div>
	);
};

export default Messenger;
