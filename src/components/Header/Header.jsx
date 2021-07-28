import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      {/* логотип с ссылкой на главную страницу */}
      <div className={styles.Logo}>
        <a href="">
          <img src="https://react-native-aria.geekyants.com/img/logo-large.png" />
        </a>
      </div>
      {/* форма для поиска */}
      <form action="" className={styles.SearchForm}>
        {/* поле ввода */}
        <input type="text" placeholder="Поиск" />
        {/* кнопка поиска */}
        <button type="submit" className={styles.SearchButton}>
          <img src="http://s1.iconbird.com/ico/2013/9/452/w512h5121380477032search.png" alt="" />
        </button>
      </form>
    </header>
  );
};

export default Header;
