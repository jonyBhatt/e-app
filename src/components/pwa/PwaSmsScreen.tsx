import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { 
  ArrowLeft, Users, MessageSquareText, 
  Bookmark, Globe, Send, CheckCircle2, Circle 
} from "lucide-react";
import { useVoterStore } from "@/store/useVoterStore";
 // Your mock data
import { cn } from "@/lib/utils";
import type { Person } from "@/types";
import { people } from "@/lib/mock/people";

export const PwaSmsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { selectedVoters, filters } = useVoterStore();
  
  // --- States ---
  const [targetType, setTargetType] = useState<"selected" | "filtered">("selected");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // --- Logic for Filtered Users ---
  // This calculates how many people match the current global filters
  const filteredCount = useMemo(() => {
    return people.filter((person:Person) => {
      const matchesJob = filters.job === "" || person.job?.includes(filters.job);
      const matchesWord = filters.word === "" || person.word_no === filters.word;
      const matchesDob = filters.dob === "" || person.date_of_birth === filters.dob;
      return matchesJob && matchesWord && matchesDob;
    }).length;
  }, [filters]);

  const charLimit = 160;
  const smsCount = Math.ceil(message.length / charLimit) || 1;
  const currentRecipientCount = targetType === "selected" ? selectedVoters.length : filteredCount;

  // --- Functional Send Logic ---
  const handleSendSms = async () => {
    if (!message.trim() || currentRecipientCount === 0) return;

    setIsSending(true);
    
    // Placeholder for your future Messaging API
    console.log("Payload:", {
      recipients: targetType === "selected" ? selectedVoters : "filtered_batch",
      content: message,
      count: currentRecipientCount
    });

    // Mock delay
    setTimeout(() => {
      setIsSending(false);
      alert(`${currentRecipientCount} জন ভোটারকে সফলভাবে এসএমএস পাঠানো হয়েছে!`);
      setMessage("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      {/* 1. App Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="size-6 text-[#1E3A8A]" />
          </button>
          <h1 className="text-xl font-bold text-[#1E3A8A]">এসএমএস</h1>
        </div>
        <div className="size-10 overflow-hidden rounded-full border-2 border-primary/20">
          <img src="/avatar.jpg" alt="User" className="h-full w-full object-cover" />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 pt-8">
        <h2 className="text-3xl font-black text-[#1E293B]">এসএমএস প্রেরণ কেন্দ্র</h2>
        <p className="mt-2 leading-relaxed text-[#64748B]">
          ভোটার বা কর্মকর্তাদের কাছে গুরুত্বপূর্ণ নোটিশ, আপডেট বা যাচাইকরণ কোড পাঠাতে নিচের ফর্মটি ব্যবহার করুন।
        </p>

        {/* 2. Recipient Selection Section */}
        <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2 font-bold text-[#1E293B]">
            <Users className="size-5 text-[#1E3A8A]" />
            <span>প্রাপক নির্বাচন</span>
          </div>

          <div className="space-y-4">
            <SelectionOption 
              active={targetType === "selected"}
              onClick={() => setTargetType("selected")}
              title="নির্বাচিত ব্যবহারকারী"
              subtitle={`${selectedVoters.length.toLocaleString('bn-BD')} জন ম্যানুয়ালি নির্বাচিত`}
            />

            <SelectionOption 
              active={targetType === "filtered"}
              onClick={() => setTargetType("filtered")}
              title="বাছাইকৃত ব্যবহারকারী"
              subtitle={`ফিল্টার অনুযায়ী মোট ${filteredCount.toLocaleString('bn-BD')} জন`}
            />
          </div>
        </div>

        {/* 3. Message Composition Section */}
        <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-[#1E293B]">
              <MessageSquareText className="size-5 text-[#1E3A8A]" />
              <span>বার্তা লিখুন</span>
            </div>

          </div>

          <div className="relative rounded-2xl border border-gray-100 bg-[#F8FAFC] p-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="এখানে আপনার বার্তা টাইপ করুন..."
              className="h-40 w-full resize-none bg-transparent text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
            />
            
            <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
                <Globe className="size-4" /> Unicode
              </div>
              <div className="rounded-lg bg-[#E0F2FE] px-3 py-1.5 text-[10px] font-bold text-[#0369A1]">
                {message.length} / {charLimit} ক্যারেক্টার ({smsCount} এসএমএস)
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button 
              type="button"
              onClick={() => setMessage("")}
              className="rounded-2xl border-2 border-gray-200 py-4 font-bold text-[#475569] hover:bg-gray-50 transition-all"
            >
              বাতিল করুন
            </button>
            <button 
              onClick={handleSendSms}
              disabled={isSending || message.length === 0 || currentRecipientCount === 0}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#00337C] py-4 font-bold text-white shadow-lg shadow-blue-900/20 disabled:opacity-50 transition-all hover:bg-[#1E3A8A]"
            >
              {isSending ? (
                <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <Send className="size-5 rotate-[-20deg]" /> এসএমএস পাঠান
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const SelectionOption = ({ title, subtitle, active, onClick }: any) => (
  <div 
    onClick={onClick}
    className={cn(
      "flex cursor-pointer items-center justify-between rounded-2xl border-2 p-5 transition-all",
      active ? "border-[#1E3A8A] bg-[#F0F7FF]" : "border-gray-100 bg-white hover:border-gray-200"
    )}
  >
    <div className="space-y-1">
      <h4 className="font-bold text-[#1E293B]">{title}</h4>
      <p className="text-xs text-[#64748B]">{subtitle}</p>
    </div>
    {active ? <CheckCircle2 className="size-6 text-[#1E3A8A]" /> : <Circle className="size-6 text-gray-200" />}
  </div>
);