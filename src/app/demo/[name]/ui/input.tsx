import { Input } from "@/components/alexandremace/input";

export const input = {
  name: "input",
  components: {
    Default: <Input placeholder="ton@email.fr" className="max-w-64 bg-card" />,
    Disabled: <Input placeholder="Désactivé" disabled className="max-w-64" />,
  },
};
