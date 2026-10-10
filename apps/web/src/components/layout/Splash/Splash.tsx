"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import flor from "@/assets/decoration/flor_deco.png";
import styles from "./Splash.module.css";

const TEMPO_MINIMO = 1200; // ms — evita "piscar" em conexões rápidas
const TEMPO_MAXIMO = 4000; // ms — nunca prender a usuária
const DURACAO_SAIDA = 900; // ms — igual à animação .saindo no CSS

type Fase = "carregando" | "saindo" | "fim";

// Resolve quando imagens (evento load) e fontes estiverem prontas
function esperarCarregamento() {
  const pagina = new Promise<void>((resolve) => {
    if (document.readyState === "complete") resolve();
    else window.addEventListener("load", () => resolve(), { once: true });
  });
  return Promise.all([pagina, document.fonts.ready]);
}

export function Splash() {
  const [fase, setFase] = useState<Fase>("carregando");

  useEffect(() => {
    let cancelado = false;
    let saiu = false;
    const timers: number[] = [];

    const sair = () => {
      if (cancelado || saiu) return; // garante que só sai uma vez
      saiu = true;
      setFase("saindo");
      timers.push(window.setTimeout(() => setFase("fim"), DURACAO_SAIDA));
    };

    // performance.now() conta desde o início da navegação
    const restante = (alvo: number) => Math.max(0, alvo - performance.now());

    timers.push(window.setTimeout(sair, restante(TEMPO_MAXIMO)));

    esperarCarregamento().then(() => {
      if (cancelado) return;
      timers.push(window.setTimeout(sair, restante(TEMPO_MINIMO)));
    });

    // Limpeza: o React (modo dev) monta/desmonta efeitos duas vezes
    return () => {
      cancelado = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  if (fase === "fim") return null;

  return (
    <div
      className={`${styles.splash} ${fase === "saindo" ? styles.saindo : ""}`}
      role="status"
      aria-label="Carregando SoFlores"
    >
      <div className={styles.flor}>
        <Image src={flor} alt="" priority sizes="12rem" />
      </div>
      <span className={styles.brilho} aria-hidden="true">
        ✦
      </span>
    </div>
  );
}
