import type { ReactElement, ReactNode } from "react";

import { badge } from "@/app/demo/[name]/ui/badge";
import { brand } from "@/app/demo/[name]/ui/brand";
import { button } from "@/app/demo/[name]/ui/button";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { climatelabBadge } from "@/app/demo/[name]/ui/climatelab-badge";
import { input } from "@/app/demo/[name]/ui/input";
import { madeWithLove } from "@/app/demo/[name]/ui/made-with-love";
import { slider } from "@/app/demo/[name]/ui/slider";
import { switchDemo } from "@/app/demo/[name]/ui/switch";
import { tabs } from "@/app/demo/[name]/ui/tabs";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  button,
  input,
  switch: switchDemo,
  slider,
  tabs,
  badge,
  checkbox,
  brand,
  "climatelab-badge": climatelabBadge,
  "made-with-love": madeWithLove,
};
