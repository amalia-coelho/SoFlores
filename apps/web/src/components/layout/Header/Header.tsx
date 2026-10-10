import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo_minimal_recortado.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <button type="button" className={styles.menu} aria-label="Abrir menu">
        ☰
      </button>

      <Link href="/" aria-label="SoFlores — início" className={styles.logo}>
        <Image src={logo} alt="" priority sizes="6rem" />
      </Link>

      <nav aria-label="Principal" className={styles.nav}>
        <Link href="/collections">Coleções</Link>
      </nav>
    </header>
  );
}
