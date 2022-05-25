import Avatar from '../img/Avatar.jpg';
import SendButton from '../img/SendButton.png';

import { rerenderEntireTree } from '../render';

let avatarPic = <img src={Avatar} alt='' style={{ borderRadius: '50%' }} />;
let sendPic = (
	<img src={SendButton} alt='отправить' style={{ height: 'inherit' }} />
);

// Здесь хранятся все данные, объедененные в объект
let state = {
	// данные профиля
	profileData: {
		userData: {
			userName: 'Пронин Иван',
			avatar: avatarPic,
		},

		// список постов
		postsData: [
			{
				content: 'Я создал новый аккаунт!',
				likes: 15,
				comments: 5,
				reposts: 1,
			},
			{
				content:
					'rszhdlkhmldtmnhdhjxlkdthjxdkhjxkdfthjxfhjxifthxkfhxhxtdblhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhxhbixhftihxklbxithgxil',
				likes: 1,
				comments: 23,
				reposts: 11,
			},
			{
				content:
					'rszhdlkhmldtmnhdhjxlkdthjxdkhjxkdfthjxfhjxifthxkfhxhxtdblhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhxhbixhftihxklbxithgxil',
				likes: 10,
				comments: 23,
				reposts: 11,
			},
		],

		// используется для обновления 'state' при создании нового поста
		newPostText: '',
	},

	// данные мессенджера
	messengerData: {
		// картинки, используещиеся в мессенджере
		img: {
			sendButton: sendPic,
		},

		// список сообщений
		messagesData: [
			{ content: 'Привет! Как дела?', id: '', avatar: '' },
			{
				content: 'Привет! Все отлично! А как у тебя?',
				id: 'you',
				avatar: avatarPic,
			},
			{ content: 'Да нормально. Чем занимаешься?', id: '', avatar: '' },

			{ content: 'Да вот, пишу сайт', id: 'you', avatar: avatarPic },
		],

		// используется для обновления 'state' при отправке сообщения
		newMessageText: '',

		// список диалоов
		dialogsData: [{ user: 'Someone' }, { user: 'Ivan' }, { user: 'Dmitry' }],
	},
};

export let functions = {
	// получает контен поста и добавляет его, обновляя DOM
	addPost: (text) => {
		state.profileData.postsData.push({
			content: text,
			likes: 0,
			comments: 0,
			reposts: 0,
		});

		state.profileData.newPostText = '';
		rerenderEntireTree(state, functions);
	},

	// получает контен сообщения и добавляет его, обновляя DOM
	addMessage: (text) => {
		state.messengerData.messagesData.push({
			content: text,
			id: '',
			avatar: '',
		});

		state.messengerData.newMessageText = '';
		rerenderEntireTree(state, functions);
	},

	// при каждом нажатии клавиши обновляет текст поста в 'state'
	updateNewPostText: (newPostText) => {
		state.profileData.newPostText = newPostText;
		rerenderEntireTree(state, functions);
	},

	// при каждом нажатии клавиши обновляет текст сообщения в 'state'
	updateNewMessage: (newMessageText) => {
		state.messengerData.newMessageText = newMessageText;
		rerenderEntireTree(state, functions);
	},
};

export default state;
