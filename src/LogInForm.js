import React from 'react';
import './LogInForm.css';

const SignIn = () => {
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
const LogInForm = () => {
	return (
		<div className="SignIn">
			<SignIn />
		</div>
	);
}

export default LogInForm;

// разобраться с инпутами
