import React from 'react';

import styles from './UserPosts.module.css';

import Post from './Post/Post';

const Posts = props => {
	return (
		<div className={styles.Wrapper}>
			<CreatePost state={props.state} />
			<AllPosts state={props.state} />
		</div>
	);
};

// ----------------------------------------------
// компоненты																		|
// ----------------------------------------------

//поле для создания нового поста
const CreatePost = props => {
	return (
		<div className={styles.NewPost}>
			{/* ввод текста */}
			<div>
				<textarea name='' id='PostInput' cols='30' rows='5'></textarea>
			</div>
			{/* кнопка создания */}
			<button type='submit' id='NewPost' onClick={PostButton(props.state)}>
				Опубликовать
			</button>
		</div>
	);
};

// Для каждого объекта в массиве 'postsData' создает элемент с постом
const AllPosts = props => {
	return (
		<div className={styles.Container}>
			{props.state.postsData.map(post => (
				<Post
					username={props.state.userData.username}
					avatar={props.state.userData.avatar}
					content={post.content}
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
const PostButton = postsArray => {
	// let textArea = document.getElementById('PostInput');
	// textArea.innerHTML = '';
	// // Добавляем новый элемент в начало массива объектов с данными постов
	// return postsArray.postsData.unshift({
	// 	content: textArea.value,
	// 	username: postsArray.userData.username,
	// 	avatar: postsArray.userData.avatar,
	// 	likes: 0,
	// 	comments: 0,
	// 	reposts: 0,
	// });
};

export default Posts;
