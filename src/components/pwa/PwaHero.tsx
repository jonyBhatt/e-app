import { features } from "@/lib/data/feature";
import { PwaFeature } from "./PwaFeature";

export const PwaHero = () => {
  return (
    <section className="bg-gray-100 min-h-svh rounded-tl-3xl rounded-tr-2xl">
      <div className="grid grid-cols-2 gap-4 px-4 py-8">
        {features.map((feature) => (
          <PwaFeature key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
};
