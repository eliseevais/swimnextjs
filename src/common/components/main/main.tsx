import s from "../main/main.module.css";
import { FiPhone } from "react-icons/fi";

export const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.leftSide}></div>
      <div className={s.rightSide}></div>
      <div className={s.greetings}>
        <h1>Обучение плаванию взрослых и детей</h1>
        <span>
          Хочешь чувствовать себя уверенно в воде?
          <br />
          Мечтаешь, чтобы твой ребёнок плавал как дельфин?
          <br />
          Или готовишься к соревнованиям?
          <br />
          SwimSchool — это место, где вода становится твоим другом.
        </span>
        <div>
          <button className={s.callme}>
            <div>
              <FiPhone className={s.icon} />
            </div>
            <div className={s.buttonText}>Связаться</div>
          </button>
        </div>
      </div>
    </div>
  );
};
