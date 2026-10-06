# 0003 — Monorepo com pnpm workspaces

**Status:** aceita · **Data:** 2026-10-05

## Decisão
Monorepo com pnpm workspaces (`apps/*`, `packages/*`), sem Turborepo por enquanto.
Scripts de instalação de dependências bloqueados por padrão (`allowBuilds`).

## Consequências
- Um repositório, um lockfile, comandos na raiz.
- Turborepo pode ser adicionado se os builds ficarem lentos.
