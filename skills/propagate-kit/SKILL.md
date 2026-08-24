---
name: propagate-kit
description: Propage un changement du kit @alexandremace sur les projets perso consommateurs. Déclencheurs - propage le kit, propagate, "mets à jour les projets avec le kit", nouveau token, nouveau composant du kit.
---

# Propager le kit @alexandremace

Diffuse un changement du registry (`~/dev/alex/ui`, publié sur
`ui.alexandremace.fr`) vers les projets perso qui le consomment. Ne concerne
**que l'écosystème perso** : les projets pro (FEVE) n'utilisent pas ce kit.

## Ordre des opérations : non négociable

1. **Le changement vit dans le kit, jamais dans un consommateur.** Si la
   conversation part d'un problème vu dans un projet, corriger d'abord dans
   `~/dev/alex/ui/src/components/alexandremace/` (ou le theme), commiter,
   pousser, attendre que le déploiement du registry soit `READY` : le CLI
   shadcn lit `ui.alexandremace.fr/r/{name}.json`, pas le disque.
2. **Grouper avant de propager.** Si d'autres correctifs kit sont en
   discussion, les finir d'abord et propager une seule fois. Chaque
   propagation pousse jusqu'à 12 projets, et chaque push consomme un slot de
   déploiement Vercel (100/jour en fenêtre glissante). Leçon vécue : propager
   au fil de l'eau a brûlé le quota entier en une journée.
3. **Propager** dans chaque projet consommateur :
   ```bash
   npx shadcn@latest add -y -o @alexandremace/<item>
   ```
4. **Vérifier les pièges connus** (voir ci-dessous) avant de commiter.
5. **Commiter chaque projet** (`chore: propagation kit (<résumé>)`), pousser,
   et laisser les déploiements partir. Si le quota est atteint
   (`payment_required`), mettre en file avec un moniteur, un projet par cycle
   d'environ 13 minutes : jamais de rafale (403).

## Les pièges connus : vérifier à chaque propagation

- **`shadcn add theme` ne réécrit PAS un `globals.css` déjà configuré.** Tout
  nouveau token (ex. `--warning`, `--success`) doit être ajouté à la main dans
  chaque projet : valeur dans `:root` **et** correspondance `--color-x` dans
  `@theme inline`.
- **`@custom-variant dark (&:is(.dark *));` doit exister** dans chaque
  `globals.css`, sinon les classes `dark:` du stock s'activent via
  `prefers-color-scheme` chez les visiteurs en OS sombre.
- **Ne jamais éditer `components/ui/` ou `components/alexandremace/`
  localement dans un consommateur.** Un besoin local est soit un vrai écart à
  remonter dans le kit, soit un cas d'usage à styler via `className`.

## Les consommateurs

`~/dev/alex/portfolio-alex`, `~/dev/alex/climat/{mix,neutral,leclimaten10minutes,footprint,transitions,thermometre,climatelab}`,
`~/dev/alex/{state-manager,culture,taste,wealth}` : vérifier la liste réelle
avec `grep -l "@alexandremace" */components.json` avant de partir, elle bouge.

## Fin de course

Annoncer : ce qui a été propagé, sur combien de projets, ce qui est déployé et
ce qui est en file. Un projet non déployé n'est pas fini.
