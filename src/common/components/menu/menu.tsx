import s from "../menu/menu.module.css";

export const Menu = () => {
  return (
    <nav className={s.navWrapper}>
      <ul className={s.linkList}>
        <li>
          <a href="#main" className={s.link}>
            Главная
          </a>
        </li>
        <li>
          <a href="#services" className={s.link}>
            Услуги
          </a>
        </li>
        <li>
          <a href="#description" className={s.link}>
            Описание
          </a>
        </li>
      </ul>
      <ul className={s.contactWrapper}>
        <li>
          <a href="#contacts" className={s.linkContacts}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
