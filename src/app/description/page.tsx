"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s from "./description.module.css";
import { BabySwimPlus } from "@/app/description/babySwimPlus/babySwimPlus";
import { AdultSwimPlus } from "@/app/description/adultSwimPlus/adultSwimPlus";
import { PrepareForCompetitionsPlus } from "@/app/description/prepareForCompetitionsPlus/prepareForCompetitionsPlus";

export default function Description() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div className={s.testimonyWrapper}>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <BabySwimPlus />
        </div>
        <div className="keen-slider__slide">
          <AdultSwimPlus />
        </div>
        <div className="keen-slider__slide">
          <PrepareForCompetitionsPlus />
        </div>
      </div>

      <div className={s.controls}>
        <button onClick={() => slider.current?.prev()}>&larr;</button>
        <button onClick={() => slider.current?.next()}>&rarr;</button>
      </div>

      <div className={s.facts}>
        <div className={s.fact}>
          <div className={s.number}>90%</div>
          <div>мышц тела задействованы во время плавания</div>
        </div>

        <div className={s.fact}>
          <div className={s.number}>30</div>
          <div>минут плавания сжигают от 200 до 400 калорий</div>
        </div>

        <div className={s.fact}>
          <div>Плавание снижает стресс на</div>
          <div className={s.number}>40%</div>
        </div>
      </div>
    </div>
  );
}
