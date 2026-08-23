/**
 * Synchronise les composants du kit avec le stock aria-nova officiel.
 *
 * La CLI shadcn installe le stock résolu (imports réécrits, icônes lucide)
 * dans fixtures/sync, puis on compare avec nos copies :
 * - Items "stock" : `--apply` écrase nos copies avec l'upstream résolu.
 * - Items "deviated" : écart assumé, l'upstream est écrit dans upstream/
 *   pour re-merger l'écart à la main.
 *
 * Écarts au stock :
 * - button : variant outline sur bg-card (surfaces posées sur le fond sable),
 *   hover secondary en color-mix oklab (oklch perd la teinte avec l'encre)
 * - slider : piste h-1.5 bg-neutral-300/70, poignée size-4 (lisibilité)
 * - input : halo de focus adouci (ring-ring/25)
 * - input-group : même halo adouci que input
 */
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const STOCK = ["switch", "tabs", "badge", "checkbox", "toggle", "toggle-group", "textarea", "dialog", "command"];
const DEVIATED = ["button", "slider", "input", "input-group"];
const APPLY = process.argv.includes("--apply");

const localPath = (name) => `src/components/alexandremace/${name}.tsx`;
const fixturePath = (name) => `fixtures/sync/components/ui/${name}.tsx`;

console.log("Installation du stock résolu dans fixtures/sync…");
execSync(
  `npx shadcn@latest add -y -o -c fixtures/sync ${[...STOCK, ...DEVIATED].join(" ")}`,
  { stdio: "pipe" },
);

let changes = 0;

for (const name of [...STOCK, ...DEVIATED]) {
  // nos copies utilisent des imports relatifs (./x) portables ; le stock résolu
  // utilise @/components/ui/x : on normalise avant de comparer.
  const normalize = (code) => code.replaceAll('from "@/components/ui/', 'from "./');
  const upstream = normalize(readFileSync(fixturePath(name), "utf8"));
  const local = readFileSync(localPath(name), "utf8");

  if (upstream.trim() === local.trim()) {
    console.log(`= ${name} : à jour`);
    continue;
  }

  changes++;
  if (DEVIATED.includes(name)) {
    mkdirSync("upstream", { recursive: true });
    writeFileSync(`upstream/${name}.tsx`, upstream);
    console.log(
      `~ ${name} : upstream a bougé, écrit dans upstream/${name}.tsx (écart à re-merger à la main)`,
    );
  } else if (APPLY) {
    writeFileSync(localPath(name), upstream);
    console.log(`✓ ${name} : mis à jour depuis l'upstream`);
  } else {
    console.log(`~ ${name} : upstream a bougé (relancer avec --apply)`);
  }
}

console.log(
  changes === 0
    ? "\nKit aligné sur le stock officiel."
    : `\n${changes} composant(s) avec du neuf upstream.`,
);
