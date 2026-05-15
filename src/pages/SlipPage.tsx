import React from "react";
import { useVoterStore } from "@/store/useVoterStore";
import { ArrowLeft, Printer, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router";

export const SlipPage = () => {
  const navigate = useNavigate();
  const { selectedVoters, slipImage } = useVoterStore();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans print:bg-white print:p-0">
      {/* App Header - Hidden on Print */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm print:hidden">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#1E3A8A] font-bold"
        >
          <ArrowLeft className="size-6" /> ফিরে যান
        </button>
        <h1 className="text-lg font-bold text-[#1E3A8A]">স্লিপ জেনারেটর</h1>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-xl bg-[#1E3A8A] px-6 py-2.5 font-bold text-white shadow-lg active:scale-95"
        >
          <Printer className="size-5" /> প্রিন্ট (৪টি/পেজ)
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-10 print:pt-0">
        {/* Grid System for 4 Items per page:
           On screen: 1 column
           On print: 2 columns, but we control the height so 4 fit on A4
        */}
        <div className="grid gap-6 md:grid-cols-1 print:grid-cols-1 print:gap-2">
          {selectedVoters.map((voter, index) => (
            <div
              key={voter.id}
              className="flex flex-col print:flex-row w-full overflow-hidden rounded-xl border border-gray-300 bg-white print:h-60 print:rounded-none print:border-black print:break-inside-avoid"
            >
              {/* LEFT COLUMN: The Campaign/Slip Image from Zustand */}
              <div className="relative  border-r border-gray-300 bg-gray-50 print:border-black">
                {slipImage ? (
                  <img
                    src={slipImage}
                    alt="Campaign"
                    className="h-full w-full object-cover print:object-contain"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center text-gray-300">
                    <ImageIcon size={40} />
                    <span className="mt-2 text-[10px]">
                      স্লিপ ইমেজ আপলোড করুন
                    </span>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Voter Details */}
              <div className="w-3/5 p-4 text-[#1E293B] print:p-3">
                {/* Header Info */}
                <div className="mb-2 border-b border-gray-200 pb-1 print:border-black">
                  <p className="text-[11px] font-bold leading-tight">
                    কেন্দ্র: ১৪৩. সিলেট সরকারি মডেল স্কুল
                  </p>
                  <p className="text-[10px] leading-tight">
                    এলাকা: উত্তর বালুচর (ইসলামাবাদ দক্ষিণ)
                  </p>
                  <p className="text-[10px] font-bold">ওয়ার্ড: ৩৬</p>
                </div>

                {/* Voter Data List */}
                <div className="space-y-1 text-[11px]">
                  <p>
                    <span className="font-bold">সিরিয়াল নাম্বার:</span>{" "}
                    {voter.id.padStart(3, "০")}
                  </p>
                  <p>
                    <span className="font-bold">নাম:</span> {voter.name}
                  </p>
                  <p>
                    <span className="font-bold">ভোটার নং:</span>{" "}
                    {voter.voter_no}
                  </p>
                  <p>
                    <span className="font-bold">জন্ম:</span>{" "}
                    {voter.date_of_birth}
                  </p>
                  <p>
                    <span className="font-bold">পিতা/স্বামী:</span>{" "}
                    {voter.father_name}
                  </p>
                  <p>
                    <span className="font-bold">মাতা:</span> {voter.mother_name}
                  </p>
                  <div className="mt-2 leading-tight">
                    <span className="font-bold block text-[9px] uppercase opacity-60">
                      ঠিকানা:
                    </span>
                    <p className="text-[10px]">
                      {voter.address.area}, {voter.address.sub_district},{" "}
                      {voter.address.district}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          body {
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};
