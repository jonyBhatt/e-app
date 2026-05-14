import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Quote, Save, CheckCircle2, Sparkles } from "lucide-react";
import { useVoterStore } from "@/store/useVoterStore";
import { cn } from "@/lib/utils";

export const PwaSlogan: React.FC = () => {
  const navigate = useNavigate();
  const { slogan, setSlogan } = useVoterStore();

  // Local state for the textarea
  const [text, setText] = useState(slogan);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setSlogan(text);
    setIsSaved(true);

    // Reset the "Saved" checkmark after 3 seconds
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10 font-sans">
      {/* App Header */}
      <header className="sticky top-0 z-50 flex items-center gap-4 border-b bg-white px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full p-2 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="size-6 text-[#1E3A8A]" />
        </button>
        <h1 className="text-xl font-bold text-[#1E3A8A]">স্লোগান পরিবর্তন</h1>
      </header>

      <main className="mx-auto max-w-2xl px-4 pt-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-4 flex size-20 items-center justify-center rounded-3xl bg-[#E0F2FE] text-[#1E3A8A] shadow-inner">
            <Quote className="size-10" />
          </div>
          <h2 className="text-3xl font-black text-[#1E293B]">
            আপনার স্লোগান সেট করুন
          </h2>
          <p className="mt-2 text-[#64748B]">
            এই স্লোগানটি আপনার অ্যাপের বিভিন্ন গুরুত্বপূর্ণ জায়গায় প্রদর্শিত
            হবে।
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 font-bold text-[#1E293B]">
            <Sparkles className="size-5 text-amber-500" />
            <span>নতুন স্লোগান লিখুন</span>
          </div>

          <div className="relative group">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="আপনার স্লোগান এখানে টাইপ করুন..."
              className="h-40 w-full rounded-2xl border-2 border-gray-100 bg-[#F8FAFC] p-5 text-lg font-medium text-[#1E293B] outline-none transition-all focus:border-[#1E3A8A]/30 focus:ring-4 focus:ring-[#1E3A8A]/5 placeholder:text-gray-300"
            />

            <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-400">
              {text.length} ক্যারেক্টার
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={handleSave}
              disabled={isSaved}
              className={cn(
                "flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-lg font-bold text-white shadow-lg transition-all active:scale-[0.98]",
                isSaved
                  ? "bg-green-600 shadow-green-900/20"
                  : "bg-[#00337C] shadow-blue-900/20 hover:bg-[#1E3A8A]",
              )}
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="size-6" /> সফলভাবে সেভ হয়েছে
                </>
              ) : (
                <>
                  <Save className="size-6" /> স্লোগান সেভ করুন
                </>
              )}
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full py-2 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              এখন না
            </button>
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="mt-10">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Live Preview
          </p>
          <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center">
            <p className="font-serif text-xl italic text-[#475569] leading-relaxed">
              "{text || "স্লোগান খালি আছে..."}"
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
