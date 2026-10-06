# 0002 — Estilização com CSS Modules + tokens

**Status:** aceita · **Data:** 2026-10-05

## Contexto
O visual é sob medida (texturas, máscaras, animações) e cada coleção
terá um tema próprio de cores.

## Decisão
CSS Modules por componente + um arquivo global de tokens em variáveis CSS.
Tokens em duas camadas: **marca** (cores do guia) e **semânticos**
(fundo, texto, acento), que as coleções sobrescrevem.

## Alternativas consideradas
- Tailwind: rápido, mas visual sob medida vira valores arbitrários.
- CSS global: não escala.
- CSS-in-JS: incompatível com Server Components.

## Consequências
- Todo o poder do CSS moderno, zero runtime.
- Disciplina necessária: usar apenas tokens, nunca valores soltos.
