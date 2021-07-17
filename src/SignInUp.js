import React, { Component } from 'react'

// Форма для входа в аккаунт
const SignInUp = () => {
	return (
		<div className="sign-in">
			<form action="">
				<input
				id=""
				type="email/tel"
				placeholder="Введите Email или номер"
				/>
				<input
				id=""
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

export default SignInUp;

// разобраться с инпутами