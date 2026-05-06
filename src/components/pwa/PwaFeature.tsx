import type { Feature } from "@/types";

interface Props {
  feature: Feature;
}
export const PwaFeature = ({ feature }: Props) => {
  return (
    <div className="group flex flex-col items-center rounded-4xl  bg-white p-6 text-center shadow-2xl transition-all hover:shadow-md border border-gray-100">
      
      {/* Image Container with Overlay Badge */}
      <div className="relative mb-6">
        <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-[#D1FAE5] p-4 transition-transform group-hover:scale-105">
          <img 
            src={feature.icon} 
            alt={feature.title} 
            className="h-full w-full object-contain"
          />
        </div>

        {/* Badge - Positioned at the bottom center of the image box */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full rounded-t-none bg-[#064E3B] px-5 py-1.5 text-[10px] font-bold tracking-wide text-[#D1FAE5] shadow-sm w-32">
          {feature.badge}
        </div>
      </div>

      {/* Content */}
      <div className="mt-2 space-y-2">
        <h3 className="font-serif text-lg font-black tracking-tight text-[#1E293B]">
          {feature.title}
        </h3>
        <p className="mx-auto  text-xs font-bold leading-snug text-[#475569]">
          {feature.subtitle}
        </p>
      </div>
    </div>
  );
};
