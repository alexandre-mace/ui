import type { ReactElement } from "react";

import { TextLink } from "@/components/alexandremace/text-link";

export const textLink: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "text-link",
  components: {
    Default: (
      <p className="max-w-md text-sm text-muted-foreground">
        Les chiffres proviennent de la{" "}
        <TextLink
          href="https://www.rte-france.com/analyses-tendances-et-prospectives/bilan-previsionnel-2050-futurs-energetiques"
          target="_blank"
          rel="noopener noreferrer"
        >
          consultation publique de RTE
        </TextLink>{" "}
        d&apos;avril 2026.
      </p>
    ),
  },
};
