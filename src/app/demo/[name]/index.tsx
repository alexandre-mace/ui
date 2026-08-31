import type { ReactElement, ReactNode } from "react";

import { badge } from "@/app/demo/[name]/ui/badge";
import { brand } from "@/app/demo/[name]/ui/brand";
import { button } from "@/app/demo/[name]/ui/button";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { climatelabBadge } from "@/app/demo/[name]/ui/climatelab-badge";
import { input } from "@/app/demo/[name]/ui/input";
import { madeWithLove } from "@/app/demo/[name]/ui/made-with-love";
import { tagFilter } from "@/app/demo/[name]/ui/tag-filter";
import { toggleGroupAm } from "@/app/demo/[name]/ui/toggle-group-am";
import {
  commandDemo,
  dialogDemo,
  inputGroupDemo,
  separatorDemo,
  textareaDemo,
  toggleDemo,
} from "@/app/demo/[name]/ui/kit-primitives";
import { slider } from "@/app/demo/[name]/ui/slider";
import { switchDemo } from "@/app/demo/[name]/ui/switch";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { textLink } from "@/app/demo/[name]/ui/text-link";
import { pageHero, toolShell } from "@/app/demo/[name]/ui/blocks-am";
import {
  alertDemo,
  backToTopDemo,
  linkCardDemo,
  searchTriggerDemo,
} from "@/app/demo/[name]/ui/kit-nouveaux";

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
  "text-link": textLink,
  tabs,
  badge,
  checkbox,
  brand,
  "climatelab-badge": climatelabBadge,
  "made-with-love": madeWithLove,
  "toggle-group": toggleGroupAm,
  "tag-filter": tagFilter,
  "page-hero": pageHero,
  "tool-shell": toolShell,
  alert: alertDemo,
  "link-card": linkCardDemo,
  "search-trigger": searchTriggerDemo,
  "back-to-top": backToTopDemo,
  toggle: toggleDemo,
  separator: separatorDemo,
  textarea: textareaDemo,
  dialog: dialogDemo,
  "input-group": inputGroupDemo,
  command: commandDemo,
};
