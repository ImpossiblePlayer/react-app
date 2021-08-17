import React from 'react';
import { ReactDOM } from 'react-dom';

import styles from './Posts.module.css';

import { Post } from './Post/Post';

const Posts = () => {
	return (
		<div className={styles.Posts}>
			<CreatePost />
			<AllPosts />
		</div>
	);
};

// ----------------------------------------------
// компоненты																		|
// ----------------------------------------------

//поле для создания нового поста
const CreatePost = () => {
	return (
		<div className={styles.NewPost}>
			{/* ввод текста */}
			<div>
				<textarea name='' id='TextArea' cols='30' rows='5'></textarea>
			</div>
			{/* кнопка создания */}
			<button type='submit' id='NewPost' /*onClick={PostButton}*/>
				Опубликовать
			</button>
		</div>
	);
};

// блок с постами пользователя
const AllPosts = () => {
	// ----------------------------------------------
	// списки данных постов													|
	// ----------------------------------------------

	let posts = [
		{
			content: 'Я создал новый аккаунт!',
			user: 'Пронин Иван',
			likes: '15',
			comments: '5',
			reposts: '1',
		},
		{
			content: 'Привет!',
			user: 'Пронин Иван',
			likes: '10',
			comments: '23',
			reposts: '11',
		},
	];
	return (
		<div className={styles.Container}>
			{posts.map((post) => (
				<Post
					content={post.content}
					username={post.user}
					likes={post.likes}
					comments={post.comments}
					reposts={post.reposts}
				/>
			))}
		</div>
	);
};

// ----------------------------------------------
// функции																			|
// ----------------------------------------------

// функия для создания нового поста
const PostButton = () => {
	let Text = document.getElementById('TextArea').value;
	// const post = <Post content={Text} username='Пронин Иван' />;

	// Добавляем новый элемент в начало элемента-родителя

	// сделать добавление в начало амссива нового объекта с данными поста
	posts.unshift();
};

export { Posts };
