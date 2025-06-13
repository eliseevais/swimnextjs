import s from "./page.module.css";
import { Header } from "@/common/components/header/header";
import { Main } from "@/common/components/main/main";
import { TypesOfSwim } from "@/common/components/typesOfSwim/typesOfSwim";
import MyServices from "@/app/services/page";
import { Footer } from "@/common/components/footer/footer";
import Description from "@/app/description/page";
import Contacts from "@/app/contacts/page";

export default function App() {
  return (
    <div className={s.page}>
      <Header />
      <section id="main">
        <Main />
      </section>
      <section id="types">
        <TypesOfSwim />
      </section>
      <section id="services">
        <MyServices />
      </section>
      <section id="description">
        <Description />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}
