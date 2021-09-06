import React from 'react';

import styles from './Messenger.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Messenger = props => {
	return (
		<div className={styles.Wrapper}>
			<Messages state={props.state} funcs={props.funcs} />
			<Dialogs state={props.state} />
		</div>
	);
};

// ----------------------------------------------
// компоненты																		|
// ----------------------------------------------

// Для каждого объекта в массиве 'messagesData' создает элемент с сообщением
const Messages = props => {
	let messageInput = React.createRef();

	const addMessage = () => {
		let text = messageInput.current.value;

		if (text) {
			props.funcs.addData(props.state.messagesData, {
				id: '',
				avatar: '',
				content: text,
			});
			messageInput.current.value = '';
		}
	};

	return (
		<div className={styles.MessengerWrapper}>
			<div className={styles.MessagesWrapper}>
				{props.state.messagesData.map(msg => (
					<Message
						id={msg.id}
						avatar={msg.avatar}
						content={msg.content}
						style={
							msg.id === 'you'
								? { alignSelf: 'flexEnd' }
								: { alignSelf: 'flexStart' }
						}
						placeHolder='Сообщение'
					/>
				))}
			</div>
			<div className={styles.MessageInputArea}>
				<textarea
					rows='auto'
					name=''
					ref={messageInput}
					className={styles.MessageInput}
				/>
				<button
					type='button'
					onClick={addMessage}
					className={styles.SendButton}
				>
					{props.state.img.sendButton}
				</button>
				{/* доделать верстку мессенджера */}
			</div>
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
