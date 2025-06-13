import Image from "next/image";
import s from "../description.module.css";

export const AdultSwimPlus = () => {
  return (
    <div className={s.imageAndDescription}>
      <div>
        <Image
          src="/assets/strongBodyOneWomen.jpg"
          alt="women"
          className={s.image}
          priority
          width="390"
          height="390"
        />
      </div>

      <div className={s.description}>
        Плавание для взрослых — это эффективный способ поддерживать физическую
        форму, укреплять сердечно-сосудистую и дыхательную системы, снимать
        мышечное напряжение и стресс. <br /> Оно улучшает осанку, гибкость,
        координацию движений и помогает в реабилитации после травм. <br />{" "}
        Регулярные тренировки в воде способствуют снижению веса, укреплению
        иммунитета и повышению общего тонуса организма, а также дарят ощущение
        внутреннего спокойствия и бодрости.
      </div>
    </div>
  );
};
