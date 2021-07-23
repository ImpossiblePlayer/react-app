import React from "react";
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.SideBar}>
      <ul>
        <li>
          <a href="">Профиль</a>
        </li>
        <li>
          <a href="">Новости</a>
        </li>
        <li>
          <a href="">Сообщения</a>
        </li>
        <li>
          <a href="">Музыка</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Настройки</a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
