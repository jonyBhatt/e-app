import React from "react";
import {
    ArrowLeft, User, X, MapPin, Phone,
    Calendar, Briefcase, Hash, Trash2, FileText, Send
} from "lucide-react";
import { useVoterStore } from "@/store/useVoterStore";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

export const SelectedListPage = ({ onBack }: { onBack: () => void }) => {
    const { selectedVoters, toggleVoter, clearAll } = useVoterStore();
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-4">
                <button onClick={onBack} className="rounded-full p-2 hover:bg-gray-100">
                    <ArrowLeft className="size-6 text-[#1E3A8A]" />
                </button>
                <h1 className="text-xl font-bold text-[#1E3A8A]">ভোটার ব্যবস্থাপনা</h1>
                <div className="flex size-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white">
                    <User className="size-6" />
                </div>
            </header>

            <main className="mx-auto max-w-2xl px-4 pt-6">
                <h2 className="text-3xl font-black text-[#1E3A8A]">নির্বাচিত তালিকা</h2>
                <p className="mt-2 text-[#64748B]">
                    মোট নির্বাচিত ভোটার: <span className="font-bold text-[#1E40AF]">{selectedVoters.length.toLocaleString('bn-BD')} জন</span>
                </p>

                {/* Action Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                <button onClick={()=> navigate("/slip")} className="flex items-center justify-center gap-2 rounded-xl bg-[#00337C] py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition-transform active:scale-95">
                        <FileText className="size-5" /> স্লিপ তৈরি করুন
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-xl bg-[#2E7D32] py-4 font-bold text-white shadow-lg shadow-green-900/20 transition-transform active:scale-95">
                        <Send className="size-5" /> এসএমএস পাঠান
                    </button>
                </div>

                {/* Clear All - Aligned Start */}
                <div className="mt-8 flex justify-start">
                    <button
                        onClick={clearAll}
                        className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2 text-sm font-bold text-red-500 transition-colors hover:bg-red-50"
                    >
                        <Trash2 className="size-4" /> সব মুছুন
                    </button>
                </div>

                {/* Selected Cards */}
                <div className="mt-6 space-y-4">
                    {selectedVoters.map((voter) => (
                        <div key={voter.id} className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                            <button
                                onClick={() => toggleVoter(voter)}
                                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                            >
                                <X className="size-6" />
                            </button>

                            <div className="flex items-start gap-4">
                                <div className="flex size-14 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0369A1]">
                                    <User className="size-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1E293B]">{voter.name}</h3>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3 text-[#475569]">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">ভোটার নম্বর:</span>
                                    <span className="font-bold text-[#1E293B]">{voter.voter_no}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="size-4 text-gray-400" />
                                    <span className="text-sm">অবস্থান:</span>
                                    <span className="font-bold text-[#1E293B]">{voter.address.district}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone className="size-4 text-gray-400" />
                                    <span className="text-sm">মোবাইল:</span>
                                    <span className="font-bold text-[#1E293B]">{voter.phone}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Calendar className="size-4 text-gray-400" />
                                    <span className="text-sm">জন্ম তারিখ:</span>
                                    <span className="font-bold text-[#1E293B]">{voter.date_of_birth}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Briefcase className="size-4 text-gray-400" />
                                    <span className="text-sm">পেশা:</span>
                                    <span className="font-bold text-[#1E293B]">{voter.job}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Hash className="size-4 text-gray-400" />
                                    <span className="text-sm">ওয়ার্ড নম্বর:</span>
                                    <span className="font-bold text-[#1E293B]">{voter.word_no}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};