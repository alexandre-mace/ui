import type { ReactElement } from "react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/alexandremace/alert";
import { BackToTop } from "@/components/alexandremace/back-to-top";
import { LinkCard } from "@/components/alexandremace/link-card";
import {
  SearchTriggerDemo,
  SearchTriggerWideDemo,
} from "@/app/demo/[name]/ui/search-trigger-demo";

export const alertDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "alert",
  components: {
    Default: (
      <div className="flex w-full max-w-md flex-col gap-3">
        <Alert variant="destructive">
          <AlertTitle>Il manque 622 TWh d&apos;électricité bas-carbone.</AlertTitle>
          <AlertDescription>
            Ces usages ne disparaissent pas : ils restent aux énergies fossiles.
          </AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>Surcapacité : 214 TWh au-delà du besoin.</AlertTitle>
          <AlertDescription>
            Une partie de cette production serait écrêtée ou modulée.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>Le besoin est couvert.</AlertTitle>
          <AlertDescription>
            Chaque TWh bas-carbone en remplace environ 2 d&apos;origine fossile.
          </AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertTitle>Chiffres provisoires</AlertTitle>
          <AlertDescription>
            L&apos;étude actualisée de RTE paraît fin 2026.
          </AlertDescription>
        </Alert>
      </div>
    ),
  },
};

export const linkCardDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "link-card",
  components: {
    Default: (
      <LinkCard href="https://mix.climatelab.fr" external className="max-w-sm">
        <p className="font-medium">Mix</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Construisez le mix électrique français de 2050 dans les bornes
          décrites par RTE.
        </p>
      </LinkCard>
    ),
  },
};

export const searchTriggerDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "search-trigger",
  components: {
    Default: <SearchTriggerDemo />,
    Wide: <SearchTriggerWideDemo />,
  },
};

export const backToTopDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "back-to-top",
  components: {
    Default: (
      <div className="relative h-32 w-full max-w-sm min-w-56 rounded-lg border border-dashed">
        <BackToTop
          threshold={-1}
          className="pointer-events-auto absolute right-4 bottom-4 translate-y-0 opacity-100"
        />
      </div>
    ),
  },
};
