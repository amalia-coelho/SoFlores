import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import styles from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <section className={styles.aboutMe} aria-labelledby="quem-sou">
      <h2 id="quem-sou" className={styles.titulo}>
        Quem eu sou?
      </h2>

      <div className={styles.colagem}>
        <Placeholder label="Foto Sofia" className={styles.grande} />
        <Placeholder label="Texto" />
        <Placeholder label="Detalhe" />
        <Placeholder label="Detalhe" className={styles.largo} />
      </div>
    </section>
  );
}
