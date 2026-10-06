import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <div className={styles.caixa}>
        <h1 className={styles.titulo}>Onde a exclusividade floresce</h1>
        <p className={styles.texto}>
          Texto de apresentação da marca (manifesto, a definir).
        </p>
      </div>

      <Placeholder label="Botão" className={styles.cta} />
    </section>
  );
}
