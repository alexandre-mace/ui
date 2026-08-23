import type { ReactElement } from "react";

import { PageHero } from "@/components/alexandremace/page-hero";
import { ToolShell } from "@/components/alexandremace/tool-shell";
import { Brand } from "@/components/alexandremace/brand";

const LOGO = "https://em-content.zobj.net/source/apple/354/high-voltage_26a1.png";

export const pageHero: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "page-hero",
  components: {
    Default: (
      <PageHero title="Construisez le mix électrique de 2050">
        Choisissez une demande, poussez les curseurs dans les{" "}
        <span className="font-medium text-foreground">
          bornes industrielles décrites par RTE
        </span>
        , et voyez ce que votre mix implique.
      </PageHero>
    ),
    Center: (
      <PageHero title="Neutral" align="center" width="xl">
        <span className="font-medium text-foreground">Se repérer</span> au
        travers de la transition énergétique.
      </PageHero>
    ),
    Compact: (
      <PageHero title="Footprint" size="compact">
        <span className="font-medium text-foreground">Comprends</span> les
        ordres de grandeur des émissions de gaz à effet de serre.
      </PageHero>
    ),
  },
};

export const toolShell: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "tool-shell",
  components: {
    Default: (
      <div className="w-full overflow-hidden rounded-xl border">
        <ToolShell
          brand={<Brand name="Mix" logo={LOGO} />}
          width="3xl"
          className="min-h-0"
        >
          <p className="py-10 text-sm text-muted-foreground">
            Le contenu de l&apos;outil prend place ici.
          </p>
        </ToolShell>
      </div>
    ),
  },
};
