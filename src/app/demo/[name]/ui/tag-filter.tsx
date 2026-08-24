import type { ReactElement } from "react";

import {
  TagFilterGroup,
  TagFilterItem,
} from "@/components/alexandremace/tag-filter";

export const tagFilter: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "tag-filter",
  components: {
    Simple: (
      <TagFilterGroup defaultValue={["climate"]} aria-label="Filtrer">
        <TagFilterItem value="all">all</TagFilterItem>
        <TagFilterItem value="climate">climate</TagFilterItem>
        <TagFilterItem value="dataviz">dataviz</TagFilterItem>
        <TagFilterItem value="design">design</TagFilterItem>
      </TagFilterGroup>
    ),
    Multiple: (
      <TagFilterGroup
        multiple
        defaultValue={["climate", "tooling"]}
        aria-label="Filtrer multiple"
      >
        <TagFilterItem value="climate">climate</TagFilterItem>
        <TagFilterItem value="media">media</TagFilterItem>
        <TagFilterItem value="tooling">tooling</TagFilterItem>
        <TagFilterItem value="culture">culture</TagFilterItem>
      </TagFilterGroup>
    ),
  },
};
