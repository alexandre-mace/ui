import { Checkbox } from "@/components/alexandremace/checkbox";

export const checkbox = {
  name: "checkbox",
  components: {
    Default: <Checkbox aria-label="Newsletter" />,
    Selected: <Checkbox defaultSelected aria-label="Coché" />,
  },
};
