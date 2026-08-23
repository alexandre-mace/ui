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
      <TagFilterGroup defaultSelectedKeys={["climate"]} aria-label="Filtrer">
        <TagFilterItem id="all">all</TagFilterItem>
        <TagFilterItem id="climate">climate</TagFilterItem>
        <TagFilterItem id="dataviz">dataviz</TagFilterItem>
        <TagFilterItem id="design">design</TagFilterItem>
      </TagFilterGroup>
    ),
    Multiple: (
      <TagFilterGroup
        selectionMode="multiple"
        defaultSelectedKeys={["climate", "tooling"]}
        aria-label="Filtrer multiple"
      >
        <TagFilterItem id="climate">climate</TagFilterItem>
        <TagFilterItem id="media">media</TagFilterItem>
        <TagFilterItem id="tooling">tooling</TagFilterItem>
        <TagFilterItem id="culture">culture</TagFilterItem>
      </TagFilterGroup>
    ),
  },
};
