# ui — le registry shadcn d'Alexandre Macé

Registry personnel (`@alexandremace`) : thème et composants partagés entre
projets (portfolio, Footprint…), sur base shadcn aria-nova (React Aria).
Construit sur le [Registry Starter](https://vercel.com/templates/next.js/shadcn-ui-registry-starter) de Vercel.

## Consommer

Dans le `components.json` d'un projet :

```json
"registries": {
  "@alexandremace": "https://ui.alexandremace.fr/r/{name}.json"
}
```

Puis :

```bash
npx shadcn@latest add @alexandremace/theme @alexandremace/button

# composants d'écosystème (header, badge ClimateLab, footer)
npx shadcn@latest add @alexandremace/brand @alexandremace/climatelab-badge @alexandremace/made-with-love
```

## Grammaire du kit

- L'identité vit dans les tokens : sable #FAF8F0, cartes #FDFCF8, bleu
  #0737FF, radius 0.625rem, thème clair unique, Geist (paquet npm) avec
  antialiased. Un projet surcharge ses tokens d'identité après import.
- Geist Sans = prose et actions, Geist Mono = données et métadonnées,
  primary = réservé aux actions (liens, CTA).
- Lead en muted-foreground, emphase non-cliquable en font-medium
  foreground.
- Écart au stock assumé (unique) : bouton outline sur bg-card. Tout écart
  vit ici, jamais dans un projet consommateur.
- Ne jamais éditer ui/ localement dans les consommateurs : propagation par
  `npx shadcn add -y -o @alexandremace/...`.

## Développer

```bash
npm run dev     # registry:build + next dev
npm run build   # registry:build + next build
```
