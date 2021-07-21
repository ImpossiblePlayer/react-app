import React from 'react';
import './Profile.css';

const Sidebar = () => {
	return (
		<form action="" className="SignInForm">
			<input
			type="email/tel"
			placeholder="Введите Email или номер"
			/>
			<input
			type="password"
			placeholder="Введите пароль"
			/>
			<button type="submit">
				Войти
			</button>
		</form>
	)
}

// Форма для входа или регистрации
const Profile = () => {
	return (
		<Sidebar />
	);
}

export default Profile;

// разобраться с инпутами
