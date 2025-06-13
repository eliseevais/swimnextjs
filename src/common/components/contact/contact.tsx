import s from "./contact.module.css";
import Image from "next/image";

export const Contact = () => {
  return (
    <div className={s.contactWrapper}>
      <div className={s.about}>
        <h2 className={s.title}>Обо мне</h2>
        <p className={s.text}>
          Привет! Меня зовут <strong>Анастасия Гусакова</strong>, и я являюсь
          мастером спорта по плаванию. Уже более 3 лет я обучаю детей и взрослых
          уверенно чувствовать себя в воде, достигать результатов и получать
          удовольствие от плавания.
        </p>
        <Image
          src="/assets/me.jpg"
          alt="Фото тренера"
          className={s.image}
          priority
          width={390}
          height={390}
        />
      </div>

      <div className={s.contact}>
        <h2 className={s.title}>Создадим результат вместе</h2>
        <p className={s.text}>Вы можете связаться со мной по телефону:</p>
        <p className={s.phone}>+7&nbsp;963&nbsp;226&nbsp;95&nbsp;10</p>
        <p className={s.text}>или написать в Telegram или WhatsApp.</p>
      </div>
    </div>
  );
};
