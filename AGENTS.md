# ui

Le registry shadcn `@alexandremace` : thème et composants partagés, publiés sur ui.alexandremace.fr.

## Commandes

- `pnpm dev` développement
- `pnpm build` build de production, et c'est le contrôle : il type-check et échoue sur une erreur de compilation
- `pnpm lint`\n- `pnpm registry:build` régénère les JSON de `public/r/`, et tourne déjà dans `dev` et `build`.\n- Ne jamais éditer `public/r/` à la main : ces fichiers sont générés depuis `registry.json`.

## Stack

Next 16 en App Router, React 19, TypeScript strict, Tailwind 4, shadcn sur base Base UI.

Conventions de la stack : `docs/next-guidelines.md` et `docs/react-guidelines.md`, liens vers [dev-standards](https://github.com/alexandre-mace/dev-standards).
