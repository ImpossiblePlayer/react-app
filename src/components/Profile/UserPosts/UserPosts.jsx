import React from 'react';

import styles from './UserPosts.module.css';

import Post from './Post/Post';

const Posts = props => {
	return (
		<div className={styles.Wrapper}>
			<CreatePost state={props.state} funcs={props.funcs} />
			<AllPosts state={props.state} />
		</div>
	);
};

// ----------------------------------------------
// компоненты																		|
// ----------------------------------------------

//поле для создания нового поста
const CreatePost = props => {
	let postInput = React.createRef();

	// функия для создания нового поста

	const addPost = () => {
		let text = postInput.current.value;

		if (text) {
			props.funcs.addData(props.state.postsData, {
				content: text,
				likes: 0,
				comments: 0,
				reposts: 0,
			});
			postInput.current.value = '';
		}
	};

	// обработчик изменений значения поста
	const postChange = () => {
		let text = postInput.current.value;
		props.funcs.updateNewPostText(text);
	};

	return (
		<div className={styles.NewPost}>
			{/* ввод текста */}
			<div>
				<textarea
					name=''
					ref={postInput}
					cols='30'
					rows='5'
					placeHolder={
						// [
						// 	'Чем хотите поделиться?',
						// 	'Текст сегодняшнего поста',
						// 	'Наберите текст...',
						// ][Math.floor(Math.random() * this.length)]
						'Введите текст поста'
					}
					value={props.state.newPostText}
					onChange={postChange}
				/>
			</div>
			{/* кнопка создания */}
			<div>
				<button type='button' id='NewPost' onClick={addPost}>
					Опубликовать
				</button>
			</div>
		</div>
	);
};

// Для каждого объекта в массиве 'postsData' создает элемент с постом
const AllPosts = props => {
	return (
		<div className={styles.PostsWrapper}>
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

export default Posts;
