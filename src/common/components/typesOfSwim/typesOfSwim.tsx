import s from "./typesOfSwim.module.css";

const swimTypes = ["Кроль", "Брасс", "Баттерфляй", "Плавание на спине"];

export const TypesOfSwim = () => {
  const repeatedTypes = [...Array(4)].flatMap(() => swimTypes);

  return (
    <div className={s.typesOfSwimWrapper}>
      <div className={s.marquee}>
        <ul className={s.marqueeContent}>
          {repeatedTypes.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
