import Link from "next/link";
import s from "../menu/menu.module.css";

export const Menu = () => {
  return (
    <nav className={s.navWrapper}>
      <div>
        <ul>
          <Link href={"Home"} className={s.link}>
            Главная
          </Link>
          <Link href={"Description"} className={s.link}>
            Описание
          </Link>
          <Link href={"Services"} className={s.link}>
            Услуги
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link href={"Contacts"} className={s.link}>
            Контакты
          </Link>
        </ul>
      </div>
    </nav>
  );
};
