import type { ReactElement } from "react";

import { Brand } from "@/components/alexandremace/brand";

export const brand: { name: string; components: Record<string, ReactElement> } = {
  name: "brand",
  components: {
    Footprint: (
      <Brand
        name="Footprint"
        logo="https://em-content.zobj.net/source/apple/391/foot_1f9b6.png"
        href="https://footprint.climatelab.fr"
      />
    ),
    Thermomètre: (
      <Brand
        name="Thermomètre"
        logo="https://em-content.zobj.net/thumbs/240/apple/354/thermometer_1f321-fe0f.png"
        href="https://thermometre.climatelab.fr"
      />
    ),
  },
};
