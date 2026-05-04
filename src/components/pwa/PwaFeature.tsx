import type { Feature } from "@/types";

interface Props {
  feature: Feature;
}
export const PwaFeature = ({ feature }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-xl text-3xl mb-3">
        {feature.icon}
      </div>

      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full mb-2">
        {feature.badge}
      </span>

      <h3 className="font-bold text-gray-800 text-lg">{feature.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
    </div>
  );
};
