import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <img src='https://react-native-aria.geekyants.com/img/logo-large.png' />
      </div>
      <form action='' className={styles.Search_form}>
        <input type="text" />
      </form>
    </header>
  );
};

export default Header;
