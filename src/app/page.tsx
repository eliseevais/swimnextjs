import styles from "./page.module.css";
import { Header } from "@/common/components/header/header";
import { Main } from "@/common/components/main/main";
import { Skills } from "@/common/components/skills/skills";
import { Works } from "@/common/components/works/works";
import { Contact } from "@/common/components/contact/contact";
import { Footer } from "@/common/components/footer/footer";
import { Testimony } from "@/common/components/testimony/testimony";

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}
