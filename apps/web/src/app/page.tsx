import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>Onde a exclusividade floresce</h1>
      <p className={styles.texto}>
        Peças exclusivas em crochê, feitas à mão com fios premium.
      </p>
    </main>
  );
}
