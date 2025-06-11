import s from "../testimony.module.css";
import Image from "next/image";

export const PrepareForCompetitionsPlus = () => {
  return (
    <div className={s.imageAndDescription}>
      <div>
        <Image
          src="/assets/strongBodyTwoWomen.jpg"
          alt="women"
          className={s.image}
          priority
          width="390"
          height="390"
        />
      </div>
      <div className={s.description}>
        Тренер по плаванию помогает улучшить технику за счёт профессионального
        анализа движений, исправления ошибок и подбора индивидуальных
        упражнений. <br /> Он контролирует положение тела, работу рук, ног и
        дыхание, чтобы сделать плавание более эффективным, экономичным и
        безопасным. <br />
        Благодаря регулярной обратной связи и поддержке тренера, пловец быстрее
        прогрессирует, достигает целей и получает уверенность в воде.
      </div>
    </div>
  );
};
