"use client";

import s from "./header.module.css";
import { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const links = [
  { href: "#main", label: "Главная", className: s.link },
  { href: "#services", label: "Услуги", className: s.link },
  { href: "#description", label: "Описание", className: s.link },
  { href: "#contacts", label: "Контакты", className: s.linkContacts },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const onClickMenuHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={s.headerWrapper}>
      <div className={`${s.logo} ${pacifico.className}`}>SwimSchool</div>

      <nav className={s.navWrapper}>
        <button
          className={`${s.burger} ${isOpen ? s.menuOpen : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? (
            <span className={s.closeIcon}>×</span>
          ) : (
            <>
              <span className={s.burgerLine}></span>
              <span className={s.burgerLine}></span>
              <span className={s.burgerLine}></span>
            </>
          )}
        </button>

        {isOpen && (
          <div
            className={`${s.logo} ${pacifico.className} ${s.logoForceMobile}`}
          >
            SwimSchool
          </div>
        )}

        <ul className={`${s.linkList} ${isOpen ? s.open : ""}`}>
          {links.map(({ href, label, className }) => (
            <li key={href}>
              <a href={href} className={className} onClick={onClickMenuHandler}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
