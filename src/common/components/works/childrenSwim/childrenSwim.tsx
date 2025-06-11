import Image from "next/image";
import s from "../childrenSwim.module.css";

export const ChildrenSwim = () => {
  return (
    <div className={s.wrapper}>
      <Image
        src="/assets/childrenSwim.jpg"
        alt="children swim"
        className={s.image}
        priority
        width="288"
        height="294"
      />
      <div className={s.caption}>Плавание для детей</div>
    </div>
  );
};
