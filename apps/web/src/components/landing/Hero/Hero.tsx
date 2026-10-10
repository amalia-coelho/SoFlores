import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <p className={styles.sobretitulo}>Peças exclusivas em crochê</p>

      <h1 className={styles.titulo}>Aqui é onde a exclusividade floresce</h1>

      <p className={styles.texto}>
        Confeccionadas à mão pela costureira e artesã Sofia Furtado,
        exclusivamente com fios premium.
      </p>

      <p className={styles.valores}>
        Autenticidade <span aria-hidden="true">✦</span> Sofisticação{" "}
        <span aria-hidden="true">✦</span> Autoconfiança
      </p>

      <Link href="/collections" className={styles.cta}>
        Ver coleções
      </Link>
    </section>
  );
}
