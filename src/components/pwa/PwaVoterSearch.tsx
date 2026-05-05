import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Filter, ChevronLeft, ChevronRight,
    Check, X, Menu, Settings, Users, LayoutDashboard,
    Eye
} from "lucide-react";
import { useVoterStore } from "@/store/useVoterStore";
import { cn } from "@/lib/utils";
import { people } from "@/lib/mock/people"; // Your provided data file
import type { Person } from "@/types";
import { Badge } from "./Badge";
import { FilterModal } from "./modal/FilterModal";
import { SelectedListPage } from "./PwaSelectedListPage";

export const PwaVoterSearch: React.FC = () => {
    const { selectedVoters, toggleVoter, selectMany, clearAll, filters, setFilters, resetFilters } = useVoterStore();

    // --- States ---
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [view, setView] = useState<"search" | "list">("search");


    // --- Filtering Logic ---
    const filteredPeople = useMemo(() => {
        return people.filter((person) => {
            const matchesSearch = person.name.includes(searchTerm) || person.voter_no?.includes(searchTerm);
            const matchesJob = filters.job === "" || person.job?.includes(filters.job);
            const matchesWord = filters.word === "" || person.word_no === filters.word;
            const matchesDob = filters.dob === "" || person.date_of_birth === filters.dob;

            return matchesSearch && matchesJob && matchesWord && matchesDob;
        });
    }, [searchTerm, filters]);

    // --- Pagination Logic ---
    const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentData = filteredPeople.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    useEffect(() => setCurrentPage(1), [searchTerm, itemsPerPage]);

    const isAllSelectedOnPage = currentData.every(p =>
        selectedVoters.some(v => v.id === p.id)
    );

    if (view === "list") return <SelectedListPage onBack={() => setView("search")} />;



    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
            {/* 1. Header Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-3 shadow-sm">
                <Menu className="size-6 text-primary" />
                <h1 className="text-xl font-bold text-[#1E3A8A]">ভোটার ব্যবস্থাপনা</h1>
                <div className="size-10 overflow-hidden rounded-full border-2 border-primary/20">
                    <img src="/avatar.jpg" alt="User" className="h-full w-full object-cover" />
                </div>
            </header>

            <main className="mx-auto max-w-2xl px-4 pt-6">
                {/* 2. Search & Filter Card */}
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="relative mb-4">
                        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="খুঁজুন (নাম, এনআইডি, ঠিকানা)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-xl border border-border bg-[#F1F5F9] py-4 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    <button
                        className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/10 py-3 font-bold text-primary transition-colors hover:bg-primary/5"
                        onClick={() => setIsModalOpen(true)} // Trigger Modal here
                    >
                        <Filter className="size-5" /> ফিল্টার
                    </button>

                    <button className="w-full rounded-xl bg-[#1E40AF] py-4 text-lg font-bold text-white shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                        খুঁজুন
                    </button>

                    {/* Active Filters Area (Placeholders for now) */}
                    <div className="mt-6">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">সক্রিয় ফিল্টার:</span>
                            {(filters.job || filters.word || filters.dob) && (
                                <button onClick={resetFilters} className="text-primary hover:underline">সব মুছুন</button>
                            )}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {filters.job && (
                                <Badge label={`পেশা: ${filters.job}`} onRemove={() => setFilters({ ...filters, job: "" })} />
                            )}
                            {filters.word && (
                                <Badge label={`ওয়ার্ড: ${filters.word}`} onRemove={() => setFilters({ ...filters, word: "" })} />
                            )}
                            {filters.dob && (
                                <Badge label={`জন্ম: ${filters.dob}`} onRemove={() => setFilters({ ...filters, dob: "" })} />
                            )}
                        </div>
                    </div>
                </div>

                {/* 3. Selection & Batch Actions */}
                <div className="flex flex-col items-start gap-3">

                <div className="mt-8 flex items-center justify-between px-2 w-full">
                    <label className="flex cursor-pointer items-center gap-3">
                        <div
                            onClick={() => isAllSelectedOnPage ? clearAll() : selectMany(currentData)}
                            className={cn(
                                "flex size-6 items-center justify-center rounded-md border-2 transition-all",
                                isAllSelectedOnPage ? "bg-primary border-primary" : "border-border bg-white"
                            )}
                        >
                            {isAllSelectedOnPage && <Check className="size-4 text-white" />}
                        </div>
                        <span className="font-bold text-[#1E293B]">সব নির্বাচন করুন</span>
                    </label>

                    <div className="rounded-lg bg-[#E0F2FE] px-2 py-2.5 text-xs font-bold text-[#0369A1]">
                        {selectedVoters.length} জন নির্বাচিত
                    </div>
                  
                </div>

                  <div>
                        {selectedVoters.length > 0 && (
                            <button
                                onClick={() => setView("list")}
                                className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
                            >
                                <Eye className="size-4" /> প্রিভিউ
                            </button>
                        )}
                    </div>
                </div>

                {/* 4. Voter List Table */}
                <div className="mt-6 overflow-hidden rounded-2xl border bg-white shadow-sm">
                    <div className="grid grid-cols-[50px_1fr_1fr_1fr] border-b bg-[#F8FAFC] p-4 text-sm font-bold text-[#64748B]">
                        <div></div>
                        <div>নাম</div>
                        <div className="text-center">পিতা/মাতা</div>
                        <div className="text-right">জন্ম তারিখ</div>
                    </div>

                    <div className="divide-y">
                        {currentData.map((person: Person) => {
                            const isSelected = selectedVoters.some(v => v.id === person.id);
                            return (
                                <div
                                    key={person.id}
                                    onClick={() => toggleVoter(person)}
                                    className={cn(
                                        "grid grid-cols-[50px_1fr_1fr_1fr] items-center p-4 transition-colors cursor-pointer",
                                        isSelected ? "bg-[#EFF6FF]" : "hover:bg-gray-50"
                                    )}
                                >
                                    <div className={cn(
                                        "flex size-5 items-center justify-center rounded border-2 transition-all",
                                        isSelected ? "bg-[#1E40AF] border-[#1E40AF]" : "border-gray-300"
                                    )}>
                                        {isSelected && <Check className="size-3 text-white" />}
                                    </div>
                                    <div className="font-bold text-[#1E293B]">{person.name}</div>
                                    <div className="text-center text-sm text-[#475569]">{person.father_name}</div>
                                    <div className="text-right text-sm text-[#475569]">{person.date_of_birth}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* 5. Pagination Controls */}
                    <div className="bg-[#F8FAFC] p-4">
                        <p className="mb-4 text-center text-sm text-[#64748B]">
                            প্রদর্শন করা হচ্ছে {startIndex + 1} থেকে {Math.min(startIndex + itemsPerPage, filteredPeople.length)} (মোট {filteredPeople.length})
                        </p>

                        <div className="flex items-center justify-between">
                            {/* <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="rounded-lg border bg-white px-2 py-2 text-sm outline-none"
                            >
                                <option value={5}>০৫ / পৃষ্ঠা</option>
                                <option value={10}>১০ / পৃষ্ঠা</option>
                                <option value={20}>২০ / পৃষ্ঠা</option>
                            </select> */}

                            <div className="flex gap-1">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(p => p - 1)}
                                    className="flex size-10 items-center justify-center rounded-lg border bg-white disabled:opacity-30"
                                >
                                    <ChevronLeft className="size-5" />
                                </button>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={cn(
                                            "size-10 rounded-lg font-bold transition-all",
                                            currentPage === i + 1 ? "bg-[#1E40AF] text-white" : "border bg-white"
                                        )}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(p => p + 1)}
                                    className="flex size-10 items-center justify-center rounded-lg border bg-white disabled:opacity-30"
                                >
                                    <ChevronRight className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FilterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </div>
    );
};

