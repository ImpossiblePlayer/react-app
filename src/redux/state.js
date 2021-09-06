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

		newPostText: 'hi',
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
		// список диалоов
		dialogsData: [{ user: 'Someone' }, { user: 'Ivan' }, { user: 'Dmitry' }],
	},
};

export let functions = {
	// получает дочерний элемент объекта 'state'
	// и добавляет в его конец объект с данными,
	// обновляя DOM
	addData: (array, data) => {
		array.push(data);
		rerenderEntireTree(state, functions);
	},

	updateNewPostText: newText => {
		state.profileData.newPostText = newText;
		rerenderEntireTree(state, functions);
	},
};

export default state;
