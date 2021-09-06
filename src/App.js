import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

// Компоненты основного блока
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import NewsFeed from './components/NewsFeed/NewsFeed';
import MusicList from './components/MusicList/MusicList';
import Settings from './components/Settings/Settings';

const App = props => {
	return (
		<BrowserRouter>
			<div className='AppWrapper'>
				<Header funcs={props.funcs} />
				<SideBar />
				{/* блок с основным содержимым (переключается за счет маршрутизации) */}
				{/* каждая компонента 'Route' анализирует URL, подставляя нужные компоненты */}
				<main className='Content'>
					<Route
						exact
						path='/'
						render={() => (
							<Profile state={props.state.profileData} funcs={props.funcs} />
						)}
					/>
					<Route
						exact
						path='/profile'
						render={() => (
							<Profile state={props.state.profileData} funcs={props.funcs} />
						)}
					/>
					<Route
						exact
						path='/messenger'
						render={() => (
							<Messenger
								state={props.state.messengerData}
								funcs={props.funcs}
							/>
						)}
					/>
					<Route exact path='/newsfeed' render={() => <NewsFeed />} />
					<Route exact path='/music' render={() => <MusicList />} />
					<Route exact path='/settings' render={() => <Settings />} />
				</main>
			</div>
		</BrowserRouter>
	);
};

// сделать переменные с параметрами

export default App;
