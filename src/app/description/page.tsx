"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s from "./description.module.css";
import { SwimDescription } from "@/common/components/swimDescription/swimDescription";

const factsData = [
  {
    number: "90 %",
    text: "мышц задействованы во время плавания — тренировка для всего тела",
  },
  {
    number: "30 минут",
    text: "плавания 3–5 раз в неделю — поддержка здоровья и формы",
  },
  {
    number: "1 км",
    text: "плавания сжигает 400–700 калорий — помогает контролировать вес",
  },
];

export default function Description() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const slidesData = [
    {
      imgSrc: `/assets/1from3.jpg`,
      altText: "baby swim",
      title: "Плавание с раннего возраста",
      description: (
        <>
          способствует гармоничному развитию, укрепляет мышцы, улучшает
          координацию движений и стимулирует работу дыхательной и
          сердечно-сосудистой систем.
          <br /> Совместные тренировки с родителями укрепляют эмоциональную
          связь и формируют чувство безопасности с первых месяцев жизни.
        </>
      ),
    },
    {
      imgSrc: `/assets/2from3.jpg`,
      altText: "adult swim",
      title: "Плавание для взрослых",
      description: (
        <>
          эффективный способ поддерживать физическую форму, укреплять
          сердечно-сосудистую и дыхательную системы, снимать напряжение и
          стресс.
          <br /> Регулярные тренировки способствуют укреплению иммунитета и
          повышению общего тонуса организма.
        </>
      ),
    },
    {
      imgSrc: `/assets/3from3.jpg`,
      altText: "preparation for competitions",
      title: "Совершенствование техники",
      description: (
        <>
          Тренер по плаванию помогает улучшить технику через профессиональный
          анализ движений, исправление ошибок и подбор индивидуальных
          упражнений.
          <br /> Благодаря регулярной обратной связи и поддержке тренера пловец
          быстрее прогрессирует, достигает поставленных целей.
        </>
      ),
    },
  ];

  return (
    <div className={s.descriptionWrapper}>
      <div ref={sliderRef} className="keen-slider">
        {slidesData.map(({ imgSrc, altText, title, description }, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <SwimDescription
              imgSrc={imgSrc}
              altText={altText}
              title={title}
              description={description}
            />
          </div>
        ))}
      </div>

      <div className={s.controls}>
        <button onClick={() => slider.current?.prev()}>&larr;</button>
        <button onClick={() => slider.current?.next()}>&rarr;</button>
      </div>

      <div className={s.facts}>
        {factsData.map((fact, index) => (
          <div className={s.fact} key={index}>
            <div className={s.number}>{fact.number}</div>
            <div>{fact.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
