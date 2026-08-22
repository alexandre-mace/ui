import { Switch } from "@/components/alexandremace/switch";

export const switchDemo = {
  name: "switch",
  components: {
    Default: <Switch aria-label="Notifications" />,
    Selected: <Switch defaultSelected aria-label="Notifications actives" />,
  },
};
