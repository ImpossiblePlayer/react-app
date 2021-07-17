import React, { Component } from 'react'

// Форма для входа в аккаунт
const LogInForm = () => {
	return (
		<div className="SignIn">
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
		</div>
	);
}

export default LogInForm;

// разобраться с инпутами