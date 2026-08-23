"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"

/**
 * Déclencheur de la recherche rapide : un bouton qui a l'allure d'un champ,
 * avec l'icône, l'invite et le raccourci.
 *
 * Il porte lui-même l'écoute de ⌘K / Ctrl+K, pour que chaque projet cesse de
 * réécrire le même useEffect. Autosuffisant sur react-aria plutôt que sur le
 * bouton du kit : le site du registry garde son propre bouton, un import
 * `@/components/ui/button` n'y résoudrait pas sur la bonne implémentation.
 */
function SearchTrigger({
  onOpen,
  label = "Rechercher…",
  shortcut = true,
  className,
}: {
  onOpen: () => void
  label?: string
  /** Écoute ⌘K / Ctrl+K et affiche le raccourci. */
  shortcut?: boolean
  className?: string
}) {
  React.useEffect(() => {
    if (!shortcut) return
    const surTouche = (evenement: KeyboardEvent) => {
      if (evenement.key === "k" && (evenement.metaKey || evenement.ctrlKey)) {
        evenement.preventDefault()
        onOpen()
      }
    }
    document.addEventListener("keydown", surTouche)
    return () => document.removeEventListener("keydown", surTouche)
  }, [onOpen, shortcut])

  return (
    <Button
      onPress={onOpen}
      aria-label={label}
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-2.5 text-sm whitespace-nowrap text-muted-foreground transition-colors outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <Search className="size-3.5 shrink-0" />
      <span className="hidden sm:inline">{label}</span>
      {shortcut && (
        <kbd className="pointer-events-none hidden items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] sm:inline-flex">
          ⌘K
        </kbd>
      )}
    </Button>
  )
}

export { SearchTrigger }
