import { LinkButton } from "@/registry/ui/button";
import { Showcase } from "@/components/showcase";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        @alexandremace/ui
      </h1>
      <p className="mt-3 text-pretty text-muted-foreground">
        Le registry shadcn d&apos;
        <LinkButton
          href="https://alexandremace.fr"
          variant="link"
          className="h-auto px-0 text-base underline decoration-primary/40 hover:decoration-primary"
        >
          Alexandre Macé
        </LinkButton>{" "}
        : un thème et des composants partagés entre projets, sur base React
        Aria.
      </p>
      <pre className="mt-6 overflow-x-auto rounded-lg border bg-card p-4">
        <code className="font-mono text-sm">
          npx shadcn@latest add @alexandremace/theme
        </code>
      </pre>
      <div className="mt-6 flex flex-wrap gap-2">
        <LinkButton href="/r/theme.json" variant="outline">
          theme
        </LinkButton>
        <LinkButton href="/r/button.json" variant="outline">
          button
        </LinkButton>
      </div>
      <Showcase />
      <p className="mt-10 text-sm text-muted-foreground">
        Cette page est rendue avec les composants du kit : le button.tsx
        affiché ici est celui que la commande installe.
      </p>
    </main>
  );
}
