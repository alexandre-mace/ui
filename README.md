# ui — le registry shadcn d'Alexandre Macé

Registry personnel (`@alexandremace`) : thème et composants partagés entre mes
projets (portfolio, Footprint, Transitions…), sur base shadcn aria-nova.

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
```

## Philosophie

- **L'identité vit dans les tokens.** `theme` porte la base (sable, bleu
  #0737FF, radius, thème clair unique). Un projet garde sa personnalité en
  surchargeant 2-3 tokens (`--primary`, `--background`, `--font-display`)
  après l'import.
- **Le moins de forks possible.** Seuls les composants qui dévient du stock
  aria-nova vivent ici ; le reste s'installe depuis le registre officiel.
- **Jamais d'édition locale de `ui/` dans les projets.** Les mises à jour se
  propagent par `npx shadcn add -y -o @alexandremace/...` — toute retouche
  locale serait écrasée.

## Développer

```bash
npm run build   # génère public/r/*.json depuis registry.json
```

Déployé sur Vercel, sortie statique dans `public/`.
