import React from 'react';

import styles from './Messenger.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Messenger = props => {
	return (
		<div className={styles.Wrapper}>
			<Messages state={props.state} />
			<Dialogs state={props.state} />
		</div>
	);
};

// ----------------------------------------------
// компоненты																		|
// ----------------------------------------------

// Для каждого объекта в массиве 'messagesData' создает элемент с сообщением
const Messages = props => {
	return (
		<div className={styles.MessagesWrapper}>
			{props.state.messagesData.map(msg => (
				<Message
					id={msg.id}
					user={msg.user}
					avatar={msg.avatar}
					content={msg.content}
					style={
						msg.id == 'you'
							? { alignSelf: 'flexEnd' }
							: { alignSelf: 'flexStart' }
					}
				/>
			))}
		</div>
	);
};

// Для каждого объекта в массиве 'dialogsData' создает элемент с диалогом
const Dialogs = props => {
	return (
		<div className={styles.Dialogs}>
			{props.state.dialogsData.map(dlg => (
				<DialogItem id={dlg.id} user={dlg.user} />
			))}
		</div>
	);
};

export default Messenger;
