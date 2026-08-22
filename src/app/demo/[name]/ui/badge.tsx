import { Badge } from "@/components/alexandremace/badge";

export const badge = {
  name: "badge",
  components: {
    Default: <Badge className="font-mono font-normal">next.js</Badge>,
    Secondary: (
      <Badge variant="secondary" className="font-mono font-normal">
        climate
      </Badge>
    ),
    Outline: (
      <Badge variant="outline" className="font-mono font-normal">
        design
      </Badge>
    ),
  },
};
