import Image from "next/image";
import s from "../childrenSwim.module.css";

export const PreparationForCompetitions = () => {
  return (
    <div className={s.wrapper}>
      <Image
        src="/assets/prepareForCompetition.jpg"
        alt="preparation for competitions"
        className={s.image}
        priority
        width="288"
        height="294"
      />
      <div className={s.caption}>Подготовка к соревнованиям</div>
    </div>
  );
};
