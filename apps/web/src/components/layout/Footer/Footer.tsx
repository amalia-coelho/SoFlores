import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Placeholder label="Logo (selo)" className={styles.selo} />
      <Placeholder label="Instagram · E-mail · WhatsApp" />
      <small className={styles.copy}>© SoFlores</small>
    </footer>
  );
}
