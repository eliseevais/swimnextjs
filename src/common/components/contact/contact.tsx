import s from "./contact.module.css";

export const Contact = () => {
  return (
    <div className={s.contactWrapper}>
      <div>
        <div>Обо мне</div>
        <div>
          Привет! Меня зовут Анастасия Гусакова и я являюсь мастером спорта по
          плаванию.
        </div>
      </div>
      <div>Мои контакты</div>
      <div>+7-963-226-95-18</div>
    </div>
  );
};
