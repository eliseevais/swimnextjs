import Image from "next/image";
import s from "@/common/components/works/childrenSwim.module.css";

export const AdultSwim = () => {
  return (
    <div className={s.wrapper}>
      <Image
        src="/assets/adultSwim.jpg"
        alt="adult swim"
        className={s.image}
        priority
        width="288"
        height="294"
      />
      <div className={s.caption}>Обучение плаванию взрослых</div>
    </div>
  );
};
