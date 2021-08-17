import React from 'react';
import styles from './Messenger.module.css';

const Messenger = () => {
	// ----------------------------------------------
	// списки сообщений и диалоов										|
	// ----------------------------------------------
	let messages = [
		{
			user: 'Someone',
			content: 'Привет! Как дела?',
		},
		{
			user: '',
			content: 'Привет! Все отлично! А как у тебя?',
		},
		{
			user: 'Someone',
			content: 'Да нормально. Чем занимаешься?',
		},
		{
			user: '',
			content: 'Да вот, пишу сайт',
		},
	];

	let dialogs = [
		{
			user: 'Someone',
		},
		{
			user: 'Ivan',
		},
		{
			user: 'Dmitry',
		},
	];

	return (
		<div className={styles.Messenger}>
			<div className={styles.Messages}>{messages.map((message) => {})}</div>
			<div className={styles.Dialogs}>{dialogs.map((dialog) => {})}</div>
		</div>
	);
};

export default Messenger;
