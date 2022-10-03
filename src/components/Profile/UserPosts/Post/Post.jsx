import React from 'react';

import styles from './Post.module.css';

const Post = (props) => {
	return (
		<div className={styles.Item}>
			<InfoWrapper name={props.username} />

			<Content content={props.content} />

			<Stats
				likes={props.likes}
				comments={props.comments}
				reposts={props.reposts}
			/>
		</div>
	);
};

// ----------------------------------------------
// компоненты																		|
// ----------------------------------------------

// блок с инцормацией о пользователе
const InfoWrapper = (props) => {
	return (
		<div className={styles.InfoWrapper}>
			<span className={styles.Avatar}>
				{/* аватарка пользователя */}
				<a href='/profile'>{props.avatar}</a>
			</span>

			{/* Имя пользователя */}
			<span className={styles.UserName}>{props.name}</span>

			<span className={styles.PublTime}>{new Date().toLocaleTimeString()}</span>
		</div>
	);
};

// основной контент поста
const Content = (props) => {
	return (
		<div className={styles.Content}>
			{/* текст поста */}
			<p>{props.content}</p>

			{/* картинки (если есть) */}
			{/* <div className={styles.PostImages}>

        </div> */}
		</div>
	);
};

// статистика поста (коментарии, лайки, репосты)
const Stats = (props) => {
	// const LikesCount = () => {
	// 	let lButton;
	// };

	return (
		<div className={styles.Stats}>
			<span className={styles.Likes}>
				<button title='Like'>L</button>
				<span>{props.likes}</span>
			</span>

			<span className={styles.Comments}>
				<button title='Comment'>C</button>
				<span>{props.comments}</span>
			</span>

			<span className={styles.Reposts}>
				<button title='Repost'>R</button>
				<span>{props.reposts}</span>
			</span>
		</div>
	);
};

export default Post;
