import s from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footerWrapper}>
      <div>💧 Сайт создан Елисеевой Ириной</div>
      <div>
        📲 Telegram:{" "}
        <a href="https://t.me/is_eliseeva" target="_blank">
          @is_eliseeva
        </a>{" "}
        | ☎️ +7 (926) 061‑30‑04
      </div>
    </footer>
  );
};
