"use client";

import s from "./page.module.css";
import { Header } from "@/common/components/header/header";
import { Main } from "@/common/components/main/main";
import { TypesOfSwim } from "@/common/components/typesOfSwim/typesOfSwim";
import MyServices from "@/app/services/page";
import { Footer } from "@/common/components/footer/footer";
import Description from "@/app/description/page";
import Contacts from "@/app/contacts/page";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={s.page}>
      <Header />
      <section id="main" className={s.section}>
        <Main />
      </section>
      <section id="types" className={s.section}>
        <TypesOfSwim />
      </section>
      <section id="services" className={s.section}>
        <MyServices />
      </section>
      <section id="description" className={s.section}>
        <Description />
      </section>
      <section id="contacts" className={s.section}>
        <Contacts />
      </section>
      <Footer />

      {showArrow && (
        <button
          className={s.scrollToTop}
          onClick={scrollToTop}
          aria-label="Наверх"
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}
