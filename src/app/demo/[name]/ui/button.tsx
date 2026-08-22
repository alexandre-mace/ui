import type { ReactElement } from "react";

import { Button, LinkButton } from "@/components/alexandremace/button";

export const button: { name: string; components: Record<string, ReactElement> } = {
  name: "button",
  components: {
    Default: <Button>Primary</Button>,
    Outline: <Button variant="outline">Outline</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Ghost: <Button variant="ghost">Ghost</Button>,
    Destructive: <Button variant="destructive">Destructive</Button>,
    Link: (
      <LinkButton href="https://alexandremace.fr" variant="link" className="px-0">
        LinkButton
      </LinkButton>
    ),
  },
};
