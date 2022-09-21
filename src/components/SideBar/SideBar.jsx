import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const SideBar = () => {
	// ----------------------------------------------
	// Список ссылок из сайдбара										|
	// ----------------------------------------------

	const links1 = [
		{
			path: '/profile',
			text: 'Профиль',
		},
		{
			path: '/messenger',
			text: 'Сообщения',
		},
		{
			path: '/newsfeed',
			text: 'Новости',
		},
		{
			path: '/music',
			text: 'Музыка',
		},
	];

	const links2 = [
		{
			path: '/settings',
			text: 'Настройки',
		},
	];

	return (
		<aside className={styles.SideBar}>
			<ul className={styles.Group}>
				{/* каждая ссылка меняет URL, а теги '<Route />' в App.js меняют содержимое в зависимости от текущего URL */}
				{links1.map((link) => {
					return (
						<li className={styles.Item}>
							<NavLink
								to={link.path}
								className={styles.Link}
								activeClassName={styles.Active}
							>
								{link.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<ul className={styles.Group}>
				{/* каждая ссылка меняет URL, а теги '<Route />' в App.js меняют содержимое в зависимости от текущего URL */}
				{links2.map((link) => {
					return (
						<li className={styles.Item}>
							<NavLink
								to={link.path}
								className={styles.Link}
								activeClassName={styles.Active}
							>
								{link.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export { SideBar };
