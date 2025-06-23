import s from "./services.module.css";
import { SwimCard } from "@/common/components/swimCard/swimCard";

export default function MyServices() {
  return (
    <div className={s.worksWrapper}>
      <div>
        <div className={s.years}>3+</div>
        <div className={s.myExpirience}>года опыта преподавания</div>
      </div>

      <div>
        <div className={s.slogan}>
          Научись плавать уверенно — в любом возрасте
        </div>
        <div className={s.typesOfServices}>
          <SwimCard
            image={`/assets/1from3.jpg`}
            alt="children swim"
            caption="Плавание грудных детей и старше"
          />
          <SwimCard
            image={`/assets/2from3.jpg`}
            alt="adult swim"
            caption="Обучение плаванию взрослых с нуля"
          />
          <SwimCard
            image={`/assets/3from3.jpg`}
            alt="competition preparation"
            caption="Совершенствование техники"
          />
        </div>
      </div>
    </div>
  );
}
