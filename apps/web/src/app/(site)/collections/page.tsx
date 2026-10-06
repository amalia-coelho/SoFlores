import Link from "next/link";

const exemplos = ["primavera", "noite-dourada"];

export default function Colecoes() {
  return (
    <main style={{ padding: "var(--espaco-6)" }}>
      <h1>Coleções</h1>
      <ul>
        {exemplos.map((slug) => (
          <li key={slug}>
            <Link href={`/colecoes/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
