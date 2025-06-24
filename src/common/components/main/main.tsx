"use client";

import { useState } from "react";
import s from "../main/main.module.css";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import ContactPopup from "@/common/components/contactPopup/contactPopup";

export const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const onTogglePopupHandler = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.leftSide}></div>
      <div className={s.rightSide}>
        <Image
          src={`/assets/2from2.jpg`}
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
          Хочешь чувствовать себя комфортно и&nbsp;уверенно в&nbsp;воде?
        </span>
        <span>
          Мечтаешь, чтобы твой малыш плавал легко и&nbsp;свободно,
          как&nbsp;дельфин?
        </span>
        <span>Готовишься к соревнованиям и&nbsp;хочешь улучшить навыки?</span>
        <span>Я помогу тебе в&nbsp;этом!</span>
        <div>
          <button className={s.buttonCallme} onClick={onTogglePopupHandler}>
            <div className={s.buttonIcon}>
              <FiPhone />
            </div>
            <div className={s.buttonText}>Связаться</div>
            <div className={s.phoneNumber}>+7 (960) 123-45-67</div>
          </button>
        </div>
      </div>

      <ContactPopup isOpen={isPopupOpen} onClose={onTogglePopupHandler} />
    </div>
  );
};
