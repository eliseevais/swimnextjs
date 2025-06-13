import Image from "next/image";
import s from "./swimCard.module.css";

type SwimCardProps = {
  image: string;
  alt: string;
  caption: string;
};

export const SwimCard = ({ image, alt, caption }: SwimCardProps) => {
  return (
    <div className={s.wrapper}>
      <Image
        src={image}
        alt={alt}
        className={s.image}
        priority
        width={288}
        height={294}
      />
      <div className={s.caption}>{caption}</div>
    </div>
  );
};
