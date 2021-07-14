import React, { Component } from 'react'

export default class Fcomponent extends Component {
	render() {
		return (
			<div>
				{/* Форма для входа в аккаунт */}
				<form action="">
					<input
					id=""
					type="email/tel"
					placeholder="Введите Email или номер"
					/>
					<input
					id=""
					/>
					<button type="submit">

					</button>
				</form>
				<p>
					Добрый день, {this.props.document.querySelector('#name').value}!
				</p>
			</div>
		)
	}
}


// разобраться с инпутами