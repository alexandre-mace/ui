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
        defaultValue={["b"]}
        aria-label="Format"
      >
        <ToggleGroupItem value="a">Gras</ToggleGroupItem>
        <ToggleGroupItem value="b">Italique</ToggleGroupItem>
        <ToggleGroupItem value="c">Souligné</ToggleGroupItem>
      </ToggleGroup>
    ),
  },
};
