# ui

Le registry shadcn `@alexandremace` : thème et composants partagés, publiés sur ui.alexandremace.fr.

## Commandes

- `pnpm dev` développement
- `pnpm build` build de production, et c'est le contrôle : il type-check et échoue sur une erreur de compilation
- `pnpm lint`
- `pnpm registry:build` régénère les JSON de `public/r/`, et tourne déjà dans `dev` et `build`.
- Ne jamais éditer `public/r/` à la main : ces fichiers sont générés depuis `registry.json`.

## Stack

Next 16 en App Router, React 19, TypeScript strict, Tailwind 4, shadcn sur base Base UI.

Conventions de la stack : `docs/next-guidelines.md` et `docs/react-guidelines.md`, liens vers [dev-standards](https://github.com/alexandre-mace/dev-standards).

## Doctrine du kit

**Le but est la convergence d'identité, pas la coexistence.** Les projets adoptent le thème tel quel,
fond sable et bleu primaire, et n'ont aucune typographie propre : Geist est la seule fonte du système,
titres en semibold tracking-tight, Geist Mono pour les chiffres et les libellés techniques.

**Une seule base, Base UI.** Plus une ligne de Radix dans le dépôt depuis le 25 août 2026. Les
composants d'écosystème (`brand`, `climatelab-badge`, `made-with-love`) sont autosuffisants sur un
`<a>` natif, sans dépendance au bouton.

**Grammaire éditoriale** : lead en `muted-foreground`, emphase non cliquable en `font-medium
foreground`, `primary` réservé aux actions, `text-pretty` sur les paragraphes d'intro. Le lien de
prose est `text-link` (souligné `decoration-primary/40`, plein au survol), jamais un `<a>` stylé à la
main, et jamais le variant `link` du bouton qui garde ses classes de bouton.

**Deux pièges du dépôt.** Le chrome du site (`src/components/ui/`) n'est pas le kit et peut dériver
sans qu'on le voie ; un grep sur `src/` seul manque le dossier `registry/` à la racine. Et quand une
décision de socle change, penser aux textes de présentation (README, meta description) autant qu'au
code.

**Une divergence assumée avec l'amont.** shadcn base-nova écrit encore les variantes
d'orientation en `data-horizontal:` / `data-vertical:`, c'est-à-dire les attributs booléens
`[data-horizontal]` / `[data-vertical]`. Base UI 1.7 n'en émet aucun : `getStateAttributesProps`
transforme l'état `orientation` en `data-orientation="horizontal"`, et chaque composant le
documente (`TabsRootDataAttributes`, `SliderRootDataAttributes`, `ToggleGroupDataAttributes`,
`SeparatorDataAttributes`). Les variantes ne matchent donc jamais : les onglets se rangeaient en
ligne au lieu de s'empiler, et la piste du slider n'avait pas de hauteur. Corrigé le 31 août 2026
en `data-[orientation=horizontal]:` / `data-[orientation=vertical]:` dans `tabs`, `slider`,
`toggle-group` et `separator`. Conséquence : `shadcn add <composant> --diff` montrera toujours cette
différence tant que l'amont n'aura pas bougé, et il ne faut pas la reprendre.

**`separator` est entré au registry pour cette raison.** Il était resté un composant shadcn officiel,
donc chaque projet en gardait une copie cassée que rien ne propageait, et un `shadcn add separator`
la ramenait. Il est désormais servi par le kit, comme le reste.

**Propagation d'un token** : `shadcn add` ne réécrit pas un `globals.css` déjà configuré. Tout nouveau
token se propage à la main dans chaque projet consommateur, la valeur dans `:root` et la
correspondance `--color-x` dans `@theme inline`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
