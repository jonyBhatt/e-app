import { useVoterStore } from "@/store/useVoterStore";
import { Printer } from "lucide-react";

export const SlipPage = () => {
  const { selectedVoters } = useVoterStore();

  return (
    <div className="min-h-screen bg-muted/30 p-4 font-sans print:bg-white print:p-0 pt-40">
      {/* Slip Grid */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 print:grid-cols-2 print:gap-4">
        {selectedVoters.map((voter) => (
          <div
            key={voter.id}
            className="relative flex flex-col border-2 border-dashed border-border bg-white p-6 shadow-sm print:shadow-none print:border-black"
          >
            <div className="mb-4 border-b pb-2 text-center">
              <h2 className="text-xl font-bold text-primary print:text-black">
                ভোটার স্লিপ
              </h2>
              <p className="text-xs text-muted-foreground">
                নির্বাচন কমিশন বাংলাদেশ
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">নাম:</span>
                <span className="font-bold">{voter.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ভোটার নম্বর:</span>
                <span className="font-bold">{voter.voter_no}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">পিতার নাম:</span>
                <span className="font-medium">{voter.father_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">পেশা:</span>
                <span className="font-medium">{voter.job}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">জন্ম তারিখ:</span>
                <span className="font-medium">{voter.date_of_birth}</span>
              </div>
              <div className="mt-4 rounded-lg bg-muted p-3 print:bg-gray-100">
                <p className="text-[10px] uppercase text-muted-foreground">
                  ভোটকেন্দ্রের ঠিকানা
                </p>
                <p className="text-xs font-bold leading-tight">
                  {voter.address.area}, {voter.address.sub_district},{" "}
                  {voter.address.district}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => window.print()}
                className=" w-full flex print:hidden justify-center items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg"
              >
                <Printer className="size-5" /> প্রিন্ট করুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
