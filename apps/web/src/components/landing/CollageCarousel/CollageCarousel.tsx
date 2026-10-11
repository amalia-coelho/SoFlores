import Image, { type StaticImageData } from "next/image";
import topCreme from "@/assets/landing/top-creme-rosas.jpg";
import bolsaMarinho from "@/assets/landing/bolsa-fitas-marinho.jpg";
import bolsaPreta from "@/assets/landing/bolsa-preta-fio-dourado.jpg";
import gorroPraia from "@/assets/landing/gorro-tela-praia.jpg";
import bolsaVerde from "@/assets/landing/bolsa-fitas-verde.jpg";
import blusaTela from "@/assets/landing/blusa-tela-cruz.jpg";
import shortsBrasil from "@/assets/landing/shorts-brasil.jpg";
import styles from "./CollageCarousel.module.css";

type Colagem = {
  src: StaticImageData;
  alt: string;
  legenda: string;
  posicao?: string; // object-position: qual parte da foto priorizar no recorte
};

// TODO: confirmar com a Sofia os nomes oficiais das peças
const colagens: Colagem[] = [
  {
    src: topCreme,
    alt: "Modelo com top de crochê creme, saia de renda e buquê de rosas",
    legenda: "Top de crochê",
  },
  {
    src: bolsaMarinho,
    alt: "Bolsa de crochê azul-marinho e amarelo-claro com fitas e flor",
    legenda: "Bolsa de fitas",
  },
  {
    src: bolsaPreta,
    alt: "Bolsa saco de crochê preta com detalhes em fio dourado",
    legenda: "Bolsa noite",
  },
  {
    src: gorroPraia,
    alt: "Modelo na praia usando gorro de crochê em tela azul",
    legenda: "Gorro de tela",
    posicao: "70% center", // a modelo está à direita na foto horizontal
  },
  {
    src: bolsaVerde,
    alt: "Bolsa de crochê verde e lilás com laços de fita",
    legenda: "Bolsa de fitas",
  },
  {
    src: blusaTela,
    alt: "Modelo com blusa de crochê em tela creme com cruz bordada",
    legenda: "Blusa de tela",
  },
  {
    src: shortsBrasil,
    alt: "Shorts de crochê verde, amarelo e azul inspirado na bandeira do Brasil",
    legenda: "Shorts Brasil",
  },
];

export function CollageCarousel() {
  return (
    <section className={styles.secao} aria-labelledby="colagens-titulo">
      <h2 id="colagens-titulo" className={styles.titulo}>
        Peças que florescem
      </h2>

      <ul className={styles.trilho}>
        {colagens.map((colagem) => (
          <li key={colagem.src.src} className={styles.painel}>
            <figure className={styles.moldura}>
              <Image
                src={colagem.src}
                alt={colagem.alt}
                fill
                sizes="(min-width: 48rem) 30vw, 70vw"
                placeholder="blur"
                className={styles.foto}
                style={
                  colagem.posicao
                    ? { objectPosition: colagem.posicao }
                    : undefined
                }
              />
              <figcaption className={styles.legenda}>
                {colagem.legenda}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
