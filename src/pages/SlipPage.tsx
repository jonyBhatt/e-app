import React from "react";
import { useVoterStore } from "@/store/useVoterStore";
import { ArrowLeft, Printer, User, MapPin, Fingerprint, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const SlipPage = () => {
  const { selectedVoters } = useVoterStore();
  const onBack = () => {
    window.history.back();
  }
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 font-sans print:bg-white print:pb-0">
      {/* 1. App Header - Hidden on Print */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-4 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full justify-center text-[#1E3A8A] transition-colors hover:bg-gray-100"
        >
          <ArrowLeft className="size-6" />
          
        </button>
        <h1 className="text-lg font-bold text-[#1E3A8A]">স্লিপ প্রিভিউ</h1>
        <div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2  transition-colors hover:bg-[#1E40AF]"
          >
            <Printer className="size-6" /> প্রিন্ট করুন
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 pt-6">
        {/* Statistics Card */}
        <div className="mb-6 rounded-2xl bg-[#E0F2FE] p-4 text-center print:hidden">
          <p className="text-sm font-bold text-[#0369A1]">
            মোট <span className="text-lg">{selectedVoters.length.toLocaleString('bn-BD')}</span> টি স্লিপ প্রিন্ট করার জন্য প্রস্তুত
          </p>
        </div>

        {/* 2. Slip Grid */}
        <div className="space-y-6 print:space-y-0 print:grid print:grid-cols-2 print:gap-4">
          {selectedVoters.map((voter) => (
            <div
              key={voter.id}
              className="overflow-hidden rounded-3xl border border-green-100 bg-gray-100 shadow-sm print:rounded-none print:border-2 print:border-black print:shadow-none"
            >
              {/* Slip Header */}
              <div className="flex items-center justify-between bg-primary px-5 py-3 text-white print:bg-gray-100 print:text-black print:border-b-2 print:border-black">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-5 opacity-80" />
                  <span className="text-sm font-bold tracking-wide">ভোটার স্লিপ</span>
                </div>
              </div>

              <div className="p-6">
                {/* Voter Identity */}
                <div className="flex items-center gap-4 border-b border-dashed border-gray-100 pb-4">
                  {/* <div className="flex size-14 items-center justify-center rounded-xl bg-[#F0F7FF] text-[#1E40AF] print:border print:border-black">
                    <User className="size-8" />
                  </div> */}
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase text-[#64748B]">নাম</p>
                    <h3 className="text-xl font-black text-[#1E293B] leading-tight">{voter.name}</h3>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <InfoItem label="ভোটার নম্বর" value={voter.voter_no} icon={Fingerprint} isId />
                  <InfoItem label="পিতার নাম" value={voter.father_name} />
                  <InfoItem label="মাতার নাম" value={voter.mother_name} />
                  <InfoItem label="পেশা" value={voter.job} />
                  <InfoItem label="জন্ম তারিখ" value={voter.date_of_birth} />
                </div>

                {/* Address Box */}
                <div className="mt-6 rounded-xl bg-[#F8FAFC] p-4 border border-blue-50 print:border-black print:bg-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="size-3.5 text-[#1E40AF] print:text-black" />
                    <span className="text-[9px] font-black uppercase text-[#1E40AF] print:text-black tracking-widest">ভোটকেন্দ্র</span>
                  </div>
                  <p className="text-xs font-bold text-[#334155] leading-relaxed">
                    {voter.address.area}, {voter.address.sub_district}, {voter.address.district}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. Fixed Bottom Action Bar - App Style */}

    </div>
  );
};

const InfoItem = ({ label, value, icon: Icon, isId = false }: any) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[9px] font-bold uppercase text-[#94A3B8] flex items-center gap-1">
      {Icon && <Icon className="size-2.5" />} {label}
    </span>
    <span className={cn(
      "font-bold truncate text-[#1E293B]",
      isId ? "text-sm text-[#1E40AF]" : "text-xs"
    )}>
      {value}
    </span>
  </div>
);