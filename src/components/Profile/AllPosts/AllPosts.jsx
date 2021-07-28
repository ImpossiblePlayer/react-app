import React from "react";
import styles from "./AllPosts.module.css";
import Post from "./Post/Post";

const Allposts = () => {
	return (
		<div className={styles.Posts}>
			{/* поле для создания нового поста */}
			<div className={styles.NewPost}>
				{/* ввод текста */}
				<div>
					<textarea name="" id="textarea" cols="30" rows="5"></textarea>
				</div>
				<button type="submit" id="NewPost">Опубликовать</button>
			</div>
			<div className={styles.Items}>
				<Post content="Я создал новый аккаунт!" name="Пронин Иван" />
				<Post content="Привет!" name="Пронин Иван" />
			</div>
		</div>
	);
	// let postButton = document.getElementById("PostButton");
	// let post = document.getElementsByClassName("Post");

	// postButton.onclick = () => {
	//   let text = document.getElementById("textarea").value;
	//   return (<Post>{text}</Post>);
	// };
};

export default Allposts;
