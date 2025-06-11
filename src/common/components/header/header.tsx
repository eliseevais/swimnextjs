import s from "../header/header.module.css";
import { Logo } from "@/common/components/logo/logo";
import { Menu } from "@/common/components/menu/menu";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <Logo />
      <Menu />
    </header>
  );
};
