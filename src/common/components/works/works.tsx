import { ChildrenSwim } from "@/common/components/works/childrenSwim/childrenSwim";
import { AdultSwim } from "@/common/components/works/adultSwim/adultSwim";
import s from "./works.module.css";
import { PreparationForCompetitions } from "@/common/components/works/preparationForCompetitions/preparationForCompetitions";
export const Works = () => {
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
};
