export default async function Collection({
  params,
}: PageProps<"/colecoes/[slug]">) {
  const { slug } = await params;

  return (
    <main style={{ padding: "var(--espaco-6)" }}>
      <h1>Coleção: {slug}</h1>
    </main>
  );
}
