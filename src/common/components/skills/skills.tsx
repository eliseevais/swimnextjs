import s from "./skills.module.css";

export const Skills = () => {
  return (
    <div className={s.skillsWrapper}>
      <ul>
        <li>Кроль</li>
        <li>Брасс</li>
        <li>Баттерфляй</li>
        <li>Плавание на спине</li>
      </ul>
    </div>
  );
};
