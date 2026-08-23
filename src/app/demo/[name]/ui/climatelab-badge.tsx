import type { ReactElement } from "react";

import { ClimateLabBadge } from "@/components/alexandremace/climatelab-badge";

export const climatelabBadge: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "climatelab-badge",
  components: {
    Default: <ClimateLabBadge />,
  },
};
