import { features } from "@/lib/data/feature";
import { PwaFeature } from "./PwaFeature";
import { VoteIcon } from "lucide-react";
import { people } from "@/lib/mock/people";

export const PwaHero = () => {
  const totalVoters = people.length;
  return (
    <section className="bg-gray-100 min-h-dvh rounded-tl-3xl rounded-tr-2xl pb-24">
      <div className="grid grid-cols-2 gap-4 px-4 py-8">
        {features.map((feature) => (
          <PwaFeature key={feature.title} feature={feature} />
        ))}
      </div>
      <div className="flex flex-col w-full px-4">
        <div className="font-serif">
          <h3 className="font-semibold">ভোটার পরিসংখ্যান</h3>
          <hr className=" border-primary" />
        </div>
        <div className="relative  rounded-2xl bg-[#1E40AF] py-5 px-7 text-white shadow-xl shadow-blue-900/20 mt-4 flex items-center justify-between">
          {/* Content Layer */}
          <div className="relative z-10 flex flex-col justify-center mt-12">
            <span className="text-lg font-medium opacity-70 tracking-wide">
              মোট নিবন্ধিত ভোটার
            </span>
            <h2 className="mt-4 font-serif text-[clamp(3rem,8vw,4.5rem)] font-black leading-none tracking-tighter opacity-50">
              {totalVoters}
            </h2>
          </div>
            <VoteIcon className="size-20 text-gray-400/30" />


          {/* Decorative Background Icon (Watermark Effect) */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2">
          </div>
        </div>
      </div>
    </section>
  );
};
