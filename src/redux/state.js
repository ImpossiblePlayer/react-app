import Avatar from '../components/Avatar/Avatar';

// Здесь хранятся все данные, объедененные в объект
let state = {
	// данные профиля
	profileData: {
		userData: { userName: 'Пронин Иван', avatar: <Avatar /> },

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
	},

	// данные мессенджера
	messengerData: {
		// список сообщений
		messagesData: [
			{
				id: 'you',
				avatar: Avatar,
				content: 'Да вот, пишу сайт',
			},
			{
				id: '',
				avatar: '',
				content: 'Да нормально. Чем занимаешься?',
			},
			{
				id: 'you',
				avatar: Avatar,
				content: 'Привет! Все отлично! А как у тебя?',
			},
			{
				id: '',
				avatar: '',
				content: 'Привет! Как дела?',
			},
		],
		// список диалоов
		dialogsData: [{ user: 'Someone' }, { user: 'Ivan' }, { user: 'Dmitry' }],
	},
};

export default state;
