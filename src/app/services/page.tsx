import { ChildrenSwim } from "@/app/services/childrenSwim/childrenSwim";
import { AdultSwim } from "@/app/services/adultSwim/adultSwim";
import { PreparationForCompetitions } from "@/app/services/prepareForCompetitions/preparationForCompetitions";
import s from "./services.module.css";

export default function MyServices() {
  return (
    <div className={s.worksWrapper}>
      <div>
        <div className={s.years}>3+</div>
        <div className={s.myExpirience}>года опыта преподавания</div>
      </div>

      <div className={s.typesOfServices}>
        <ChildrenSwim />
        <AdultSwim />
        <PreparationForCompetitions />
      </div>
    </div>
  );
}
