import React from "react";
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.SideBar}>
      <ul className={styles.NavBarGroup}>
        <li className={styles.NavBarGroup__item}>
          <a className={styles.NavBarGroup__link} href="">Профиль</a>
        </li>
        <li className={styles.NavBarGroup__item}>
          <a className={styles.NavBarGroup__link} href="">Новости</a>
        </li>
        <li className={styles.NavBarGroup__item}>
          <a className={styles.NavBarGroup__link} href="">Сообщения</a>
        </li>
        <li className={styles.NavBarGroup__item}>
          <a className={styles.NavBarGroup__link} href="">Музыка</a>
        </li>
      </ul>
      <ul className={styles.NavBarGroup}>
        <li className={styles.NavBarGroup__item}>
          <a className={styles.NavBarGroup__link} href="">Настройки</a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
