import Image from "next/image";
import s from "./swimDescription.module.css";

type SwimDescriptionProps = {
  imgSrc: string;
  altText: string;
  title: string;
  description: React.ReactNode;
};

export const SwimDescription = ({
  imgSrc,
  altText,
  title,
  description,
}: SwimDescriptionProps) => {
  return (
    <div className={s.imageAndDescription}>
      <div>
        <Image
          src={imgSrc}
          alt={altText}
          className={s.image}
          priority
          width={390}
          height={390}
        />
      </div>
      <div className={s.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
