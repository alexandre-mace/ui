import type { Metadata } from "next";

import { demos } from "@/app/demo/[name]/index";
import { getRegistryItem } from "@/lib/registry";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Tous les composants du kit @alexandremace, rendus sur une seule page.",
};

export default function DemoIndexPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 p-6 md:p-10">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">Demo</h1>
        <p className="text-sm text-muted-foreground">
          Tous les composants du kit, rendus d&apos;un coup.
        </p>
      </header>

      {Object.entries(demos).map(([key, demo]) => {
        const item = getRegistryItem(key);
        return (
          <section key={key} className="flex flex-col gap-3">
            <h2 className="font-mono text-sm text-muted-foreground">
              {item?.title ?? demo.name}
            </h2>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 rounded-lg border bg-card p-6">
              {demo.components &&
                Object.entries(demo.components).map(([label, node]) => (
                  <div
                    key={label}
                    className="flex min-w-0 flex-col items-start gap-2"
                  >
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {label}
                    </span>
                    {node}
                  </div>
                ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
