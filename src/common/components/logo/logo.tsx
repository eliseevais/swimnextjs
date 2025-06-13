import s from "../logo/logo.module.css";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export const Logo = () => {
  return <div className={`${s.logo} ${pacifico.className}`}>SwimSchool</div>;
};
