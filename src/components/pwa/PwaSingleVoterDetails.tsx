import React from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Share2, MapPin, Phone, UserRound, Info } from "lucide-react";
import { useVoterStore } from "@/store/useVoterStore";
import { people } from "@/lib/mock/people";
import { cn } from "@/lib/utils";

export const VoterDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get ID from URL /voter/:id
  const { profileImage, slogan } = useVoterStore();

  // Find the specific voter from mock data
  const voter = people.find((p) => p.id === id) || people[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      {/* App Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-2 hover:bg-gray-100">
          <ArrowLeft className="size-6 text-[#1E3A8A]" />
        </button>
        <h1 className="text-xl font-bold text-[#1E3A8A]">ভোটার বিস্তারিত</h1>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Share2 className="size-5 text-[#1E3A8A]" />
        </button>
      </header>

      <main className="mx-auto max-w-2xl px-4 pt-6">
        
        {/* 1. Branding Header Card (Profile Image & Slogan from Zustand) */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 mb-6">
          <div className="bg-[#064E3B] p-6 text-center text-white">
            <div className="relative mx-auto mb-4  overflow-hidden rounded-2xl  border-white/20">
              {profileImage ? (
                <img src={profileImage} alt="Candidate" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                  <UserRound size={48} />
                </div>
              )}
            </div>
          </div>
          
          <div className="p-4 bg-white text-center italic font-serif text-[#475569] border-b">
            "{slogan || "চলো একসাথে গড়ি বাংলাদেশ।"}"
          </div>
        </div>

        {/* 2. Voter Detail Info Card */}
        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          {/* Voting Center Header */}
          <div className="bg-[#1E3A8A] px-6 py-3 text-white flex items-center gap-2">
            <MapPin className="size-4" />
            <span className="font-bold text-sm">কেন্দ্র: ১৪২. বালুচর সরকারি প্রাথমিক বিদ্যালয়</span>
          </div>

          <div className="p-6 space-y-5">
            <div className="grid grid-cols-1 gap-4">
              <DetailRow label="সিরিয়াল নাম্বার" value={voter.id.padStart(3, '০')} highlight />
              <DetailRow label="নাম" value={voter.name} />
              <DetailRow label="ভোটার নং" value={voter.voter_no} />
              <DetailRow label="জন্ম তারিখ" value={voter.date_of_birth} />
              <DetailRow label="পিতা/স্বামী" value={voter.father_name} />
              <DetailRow label="মাতা" value={voter.mother_name} />
              <DetailRow label="ঠিকানা" value={`${voter.address.area}, ${voter.address.locality}`} />
              <DetailRow label="এলাকা" value={voter.address.sub_district} />
              <DetailRow label="ওয়ার্ড" value={voter.word_no} />
            </div>
          </div>

          {/* Footer Contact */}
          {/* <div className="border-t bg-gray-50 px-6 py-4 flex items-center justify-between text-[10px] font-bold text-[#64748B]">
             <span>এ.আই.এস.আইটি, ঢাকা</span>
             <div className="flex items-center gap-1">
               <Phone size={10} />
               <span>০১৬২৪১৫৬৫৪৫</span>
             </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

// Helper Component for the list rows
const DetailRow = ({ label, value, highlight = false }: any) => (
  <div className={cn(
    "flex items-start border-b border-gray-50 pb-2 last:border-0",
    highlight && "bg-blue-50/50 p-2 rounded-lg border-0"
  )}>
    <span className="w-32 shrink-0 text-sm font-medium text-[#64748B]">{label}:</span>
    <span className={cn(
      "text-sm font-bold text-[#1E293B]",
      highlight && "text-[#1E3A8A]"
    )}>{value}</span>
  </div>
);