import type { ReactElement } from "react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/alexandremace/toggle-group";

export const toggleGroupAm: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "toggle-group",
  components: {
    Outline: (
      <ToggleGroup
        variant="outline"
        defaultSelectedKeys={["b"]}
        aria-label="Format"
      >
        <ToggleGroupItem id="a">Gras</ToggleGroupItem>
        <ToggleGroupItem id="b">Italique</ToggleGroupItem>
        <ToggleGroupItem id="c">Souligné</ToggleGroupItem>
      </ToggleGroup>
    ),
  },
};
