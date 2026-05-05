import React, { useState } from "react";
import { X, Briefcase, MapPin, Calendar, Check, Trash2 } from "lucide-react";
import { useVoterStore } from "@/store/useVoterStore";

export const FilterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { filters, setFilters, resetFilters } = useVoterStore();
  
  // Local state to hold changes before clicking "Apply"
  const [localFilters, setLocalFilters] = useState(filters);

  if (!isOpen) return null;

  const wards = Array.from({ length: 42 }, (_, i) => 
    (i + 1).toLocaleString("bn-BD", { minimumIntegerDigits: 2 })
  );

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center">
      <div className="w-full max-w-lg rounded-t-3xl bg-white p-6 shadow-xl sm:rounded-3xl">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-bold text-[#1E3A8A]">ফিল্টার করুন</h2>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100">
            <X className="size-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Job Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">পেশা</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="পেশা লিখুন"
                value={localFilters.job}
                onChange={(e) => setLocalFilters({ ...localFilters, job: e.target.value })}
                className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Word Dropdown */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">ওয়ার্ড নম্বর</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <select
                value={localFilters.word}
                onChange={(e) => setLocalFilters({ ...localFilters, word: e.target.value })}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-[#F8FAFC] py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">ওয়ার্ড নম্বর নির্বাচন করুন</option>
                {wards.map((w) => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
          </div>

          {/* DOB Input (Bengali Text) */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">জন্ম তারিখ</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="উদা: ১২/০৫/১৯৯০ (বাংলায়)"
                value={localFilters.dob}
                onChange={(e) => setLocalFilters({ ...localFilters, dob: e.target.value })}
                className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 grid grid-cols-2 gap-4">
          <button
            onClick={() => { resetFilters(); setLocalFilters({job:"", word:"", dob:""}); }}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-4 font-bold text-gray-600 transition-colors hover:bg-gray-50"
          >
            <Trash2 className="size-5" /> ফিল্টার মুছুন
          </button>
          <button
            onClick={() => { setFilters(localFilters); onClose(); }}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#00337C] py-4 font-bold text-white shadow-lg active:scale-95"
          >
            <Check className="size-5" /> ফিল্টার প্রয়োগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};