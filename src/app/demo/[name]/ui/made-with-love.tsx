import type { ReactElement } from "react";

import { MadeWithLove } from "@/components/alexandremace/made-with-love";

export const madeWithLove: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "made-with-love",
  components: {
    Default: <MadeWithLove className="mt-0" />,
  },
};
