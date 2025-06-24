import s from "./contacts.module.css";
import Image from "next/image";

export default function Contacts() {
  return (
    <div className={s.contactWrapper}>
      <div className={s.leftSide}>
        <Image
          src={`/assets/1from2.jpg`}
          alt="Фото тренера"
          fill
          style={{ objectFit: "cover", zIndex: 7 }}
          priority
        />
      </div>

      <div className={s.rightSide}>
        <h2 className={s.title}>Создадим результат вместе</h2>
        <p className={s.text}>
          Уже больше 3 лет я помогаю взрослым и детям чувствовать себя уверенно
          в воде, достигать своих целей и получать настоящее удовольствие от
          плавания.
        </p>

        <p className={s.text}>Буду рада услышать Вас по телефону:</p>
        <p className={s.phone}>+7 (960) 123-45-67</p>
        <p className={s.text}>
          Или пишите в Telegram или WhatsApp — всегда на связи!
        </p>
      </div>
    </div>
  );
}
