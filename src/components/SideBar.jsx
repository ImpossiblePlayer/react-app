import React from "react";

const Sidebar = () => {
  return (
    <aside className="Sidebar">
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

export default Sidebar;
