import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
	let searchArea = React.createRef();

	return (
		<header className={styles.Header}>
			{/* логотип с ссылкой на главную страницу */}

			<NavLink to='/' className={styles.Logo}>
				<span>
					<img
						src='https://react-native-aria.geekyants.com/img/logo-large.png'
						alt=''
					/>
				</span>
				<span>Reactive Network</span>
			</NavLink>

			{/* поиск */}
			<div action='' className={styles.SearchWrapper}>
				{/* поле ввода */}
				<textarea ref={searchArea} placeholder='Поиск' value />
				{/* кнопка поиска */}
				<button type='submit' className={styles.SearchButton}>
					<img
						src='http://s1.iconbird.com/ico/2013/9/452/w512h5121380477032search.png'
						alt=''
					/>
				</button>
			</div>
		</header>
	);
};

export { Header };
