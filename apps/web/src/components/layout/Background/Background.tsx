import Image from "next/image";
import fundo from "@/assets/background/fundo_rosa_granulado_resized.png";
import styles from "./Background.module.css";

export function Background() {
  return (
    <div className={styles.fundo} aria-hidden="true">
      <Image
        src={fundo}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className={styles.imagem}
      />
    </div>
  );
}
