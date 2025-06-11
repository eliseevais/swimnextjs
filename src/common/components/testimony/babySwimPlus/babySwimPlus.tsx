import s from "../testimony.module.css";
import Image from "next/image";

export const BabySwimPlus = () => {
  return (
    <div className={s.imageAndDescription}>
      <div>
        <Image
          src="/assets/babySwim.jpg"
          alt="baby swim"
          className={s.image}
          priority
          width="390"
          height="390"
        />
      </div>

      <div className={s.description}>
        Плавание для грудничков приносит огромную пользу: оно способствует
        гармоничному развитию моторики, укрепляет мышцы и улучшает координацию
        движений, стимулирует дыхательную и сердечно-сосудистую системы, а также
        укрепляет иммунитет. <br /> Вода помогает младенцам расслабиться,
        справиться с тревожностью и улучшает качество сна. <br /> Кроме того,
        занятия с родителями усиливают эмоциональную связь и дарят ребёнку
        чувство уверенности и безопасности с самого раннего возраста.
      </div>
    </div>
  );
};
