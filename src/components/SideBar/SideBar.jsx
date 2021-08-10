import React from 'react';
import styles from './SideBar.module.css';

const SideBar = () => {
	return (
		<aside className={styles.SideBar}>
			<ul className={styles.Group}>
				{/* каждая ссылка меняет URL, а теги '<Route />' в App.js меняют содержимое в зависимости от текущего URL */}
				<li className={styles.Item}>
					<a className={styles.Link} href='/profile'>
						Профиль
					</a>
				</li>
				<li className={styles.Item}>
					<a className={styles.Link} href='/messenger'>
						Сообщения
					</a>
				</li>
				<li className={styles.Item}>
					<a className={styles.Link} href='/newsfeed'>
						Новости
					</a>
				</li>
				<li className={styles.Item}>
					<a className={styles.Link} href='/musiclist'>
						Музыка
					</a>
				</li>
			</ul>
			<ul className={styles.Group}>
				<li className={styles.Item}>
					<a className={styles.Link} href='/settings'>
						Настройки
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default SideBar;
