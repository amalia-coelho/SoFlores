import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import styles from "./Interlude.module.css";

export function Interlude() {
  return (
    <section className={styles.interlude} aria-label="Transição">
      <Placeholder label="Faixa (conteúdo a definir)" className={styles.faixa} />
    </section>
  );
}
