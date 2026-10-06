import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import styles from "./CollageCarousel.module.css";

const colagens = ["Colagem 1", "Colagem 2", "Colagem 3", "Colagem 4"];

export function CollageCarousel() {
  return (
    <section aria-label="Colagens">
      <ul className={styles.trilho}>
        {colagens.map((colagem) => (
          <li key={colagem} className={styles.painel}>
            <Placeholder label={colagem} className={styles.preenche} />
          </li>
        ))}
      </ul>
    </section>
  );
}
