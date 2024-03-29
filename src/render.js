import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

export const rerenderEntireTree = (state, functions) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} funcs={functions} />
			</BrowserRouter>
		</React.StrictMode>
	);
};

reportWebVitals();
