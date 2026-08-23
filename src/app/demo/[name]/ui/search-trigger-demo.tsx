"use client";

import { SearchTrigger } from "@/components/alexandremace/search-trigger";

/**
 * Le déclencheur exige un `onOpen`, et une fonction ne traverse pas la
 * frontière serveur/client : la démo passe donc par un composant client
 * plutôt que par un élément construit côté serveur.
 */
export function SearchTriggerDemo() {
  return <SearchTrigger onOpen={() => {}} />;
}

export function SearchTriggerWideDemo() {
  return <SearchTrigger onOpen={() => {}} className="w-60" />;
}
