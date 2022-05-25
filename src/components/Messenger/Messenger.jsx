import React from 'react';

import styles from './Messenger.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Messenger = (props) => {
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
const Messages = (props) => {
	let messageInput = React.createRef();

	// функция для создания нового поста
	const addMessage = () => {
		// получает текст из '<textarea/>'
		let text = messageInput.current.value;

		// если есть текст, создает новое сообщение
		if (text) {
			props.funcs.addMessage(text);
		}
	};

	// при каждом нажатии клавиши обновляет текст сообщения в 'state'
	const messageChange = () => {
		let text = messageInput.current.value;
		props.funcs.updateNewMessage(text);
	};

	return (
		<div className={styles.MessengerWrapper}>
			<div className={styles.MessagesWrapper}>
				{props.state.messagesData.map((msg) => (
					<Message
						id={msg.id}
						avatar={msg.avatar}
						content={msg.content}
						styles={
							msg.id == 'you'
								? { alignSelf: 'flexEnd' }
								: { alignSelf: 'flexStart' }
						}
					/>
				))}
			</div>
			<div className={styles.MessageInputArea}>
				<textarea
					placeHolder='Сообщение'
					value={props.state.newMessageText}
					ref={messageInput}
					onChange={messageChange}
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
const Dialogs = (props) => {
	return (
		<div className={styles.Dialogs}>
			{props.state.dialogsData.map((dlg) => (
				<DialogItem id={dlg.id} user={dlg.user} />
			))}
		</div>
	);
};

export default Messenger;
