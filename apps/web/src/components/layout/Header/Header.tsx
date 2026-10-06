import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <button type="button" className={styles.menu} aria-label="Abrir menu">
        ☰
      </button>

      <Link href="/" aria-label="SoFlores — início">
        <Placeholder label="Logo" className={styles.logo} />
      </Link>

      <nav aria-label="Principal" className={styles.nav}>
        <Link href="/colecoes">Coleções</Link>
      </nav>
    </header>
  );
}
