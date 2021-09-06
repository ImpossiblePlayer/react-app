import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

// перерисовывает весь DOM заново с учетом состояния
export let rerenderEntireTree = (state, functions) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} funcs={functions} />
		</React.StrictMode>,
		document.getElementById('root')
	);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
