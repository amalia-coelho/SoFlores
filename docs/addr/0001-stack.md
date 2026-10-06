# 0001 — Stack principal

**Status:** aceita · **Data:** 2026-10-05

## Contexto
Site e-commerce com forte apelo estético, mantido por uma única desenvolvedora,
que também é objeto de estudo (React/TypeScript, Go, PostgreSQL).

## Decisão
- **Web:** Next.js (App Router, TypeScript, React Compiler)
- **API:** Go
- **Banco:** PostgreSQL rodando em Docker
- **Painel administrativo:** dentro do app web, em `/admin`

## Consequências
- SSR e otimização de imagem nativos no front.
- Duas linguagens para manter; a API em Go fica isolada e com escopo próprio.
