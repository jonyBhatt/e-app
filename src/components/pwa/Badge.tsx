import { X } from "lucide-react";

export const Badge = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <div className="flex items-center gap-1 rounded-lg bg-[#E0F2FE] px-3 py-1.5 text-sm font-medium text-[#0369A1]">
    {label}
    <button onClick={onRemove} className="ml-1 hover:text-red-500">
      <X size={14} />
    </button>
  </div>
);