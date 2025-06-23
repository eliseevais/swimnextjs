"use client";

import { useState } from "react";
import s from "../main/main.module.css";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import ContactPopup from "@/common/components/contactPopup/contactPopup";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={s.mainWrapper}>
      <div className={s.leftSide}></div>
      <div className={s.rightSide}>
        <Image
          src={`${basePath}/assets/2from2.jpg`}
          alt="background"
          fill
          style={{
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </div>
      <div className={s.greetings}>
        <h1>Обучение плаванию взрослых и детей</h1>
        <span>
          Хочешь чувствовать себя уверенно в воде?
          <br />
          Мечтаешь, чтобы твой ребёнок плавал как дельфин?
          <br />
          Или готовишься к соревнованиям?
          <br />
          SwimSchool — это место, где вода становится твоим другом.
        </span>
        <div>
          <button
            className={s.buttonCallme}
            onClick={() => setIsPopupOpen(true)}
          >
            <div>
              <FiPhone className={s.buttonIcon} />
            </div>
            <div className={s.buttonText}>Связаться</div>
          </button>
        </div>
      </div>

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};
