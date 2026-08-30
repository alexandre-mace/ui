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

**Propagation d'un token** : `shadcn add` ne réécrit pas un `globals.css` déjà configuré. Tout nouveau
token se propage à la main dans chaque projet consommateur, la valeur dans `:root` et la
correspondance `--color-x` dans `@theme inline`.
