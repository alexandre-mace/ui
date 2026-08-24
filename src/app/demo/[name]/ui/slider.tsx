import { Slider } from "@/components/alexandremace/slider";

export const slider = {
  name: "slider",
  components: {
    Default: (
      <div className="w-64">
        <Slider aria-label="Intensité" defaultValue={40} min={0} max={100} />
      </div>
    ),
  },
};
