import { people } from "@/lib/mock/people";
import { cn } from "@/lib/utils";
import { useVoterStore } from "@/store/useVoterStore";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Hash,
  MapPin,
  Search,
  User,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

export const PeopleSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dobFilter, setDobFilter] = useState("");
  const [jobFilter, setJobFilter] = useState(""); // Placeholder state
  const [wordFilter, setWordFilter] = useState(""); // Placeholder state
  const [parentName, setParentName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { toggleVoter, selectMany, selectedVoters } = useVoterStore();

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, dobFilter, jobFilter, wordFilter]);

  // --- Filtering Logic (Optimized with useMemo) ---
  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      const matchesName = person.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFatherName =
        person.father_name.toLowerCase().includes(parentName.toLowerCase()) ||
        person.mother_name.toLowerCase().includes(parentName.toLowerCase());
      const matchesDob = person.date_of_birth.includes(dobFilter);
      const matchesJob = jobFilter ? person.job?.includes(jobFilter) : true;
      const matchesWord = wordFilter
        ? person.word_no?.includes(wordFilter)
        : true;

      return (
        matchesName &&
        matchesDob &&
        matchesJob &&
        matchesWord &&
        matchesFatherName
      );
    });
  }, [searchTerm, dobFilter, jobFilter, wordFilter]);

  const handleSelectBatch = () => {
    // Take the currently filtered list (which could be 200 people)
    // and grab the first 50 that aren't already selected.
    const batch = filteredPeople.slice(0, 50);
    selectMany(batch);
  };

  const clearAll = () => {
    useVoterStore.getState().clearAll();
  };

  //Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPeople = filteredPeople.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="min-h-dvh bg-background p-6 font-sans  flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-serif text-3xl font-bold text-foreground">
            ভোটার অনুসন্ধান
          </h1>
          <p className="text-muted-foreground">
            আপনার প্রয়োজনীয় তথ্য খুঁজে পেতে ফিল্টার ব্যবহার করুন
          </p>
        </header>

        <div className="grid flex-1 gap-8 grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Sidebar Filters */}
          <aside className="space-y-6 col-span-3 overflow-y-auto border-r p-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-2 font-bold text-primary">
                <Filter className="size-5" /> ফিল্টারসমূহ
              </div>

              <div className="space-y-4">
                {/* Search Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">নাম দিয়ে খুঁজুন</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="নাম লিখুন..."
                      className="w-full rounded-xl border border-input bg-background py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Father Name Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">পিতা/মাতার নাম</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="নাম লিখুন..."
                      className="w-full rounded-xl border border-input bg-background py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* DOB Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">জন্ম তারিখ</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      value={dobFilter}
                      onChange={(e) => setDobFilter(e.target.value)}
                      placeholder="দিন/মাস/বছর"
                      className="w-full rounded-xl border border-input bg-background py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Job Filter (Future Integration) */}
                <div className="space-y-2 opacity-60">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Briefcase className="size-4" /> পেশা (শীঘ্রই আসছে)
                  </label>
                  <input
                    disabled
                    type="text"
                    className="w-full rounded-xl border border-input bg-muted/50 py-2 px-4 text-sm cursor-not-allowed"
                  />
                </div>

                {/* Word No Filter (Future Integration) */}
                <div className="space-y-2 opacity-60">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Hash className="size-4" /> ওয়ার্ড নং (শীঘ্রই আসছে)
                  </label>
                  <input
                    disabled
                    type="text"
                    className="w-full rounded-xl border border-input bg-muted/50 py-2 px-4 text-sm cursor-not-allowed"
                  />
                </div>

                <div className="mt-6 pt-6 border-t">
                  <button
                    onClick={handleSelectBatch}
                    className="w-full rounded-lg bg-primary/10 p-3 text-xs font-bold text-primary hover:bg-primary/20 transition-all"
                  >
                    ফিল্টারকৃত প্রথম ৫০ জন নির্বাচন করুন
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="lg:col-span-6 overflow-y-auto p-6 bg-muted/20">
            <div className="mb-4 text-sm text-muted-foreground">
              মোট পাওয়া গেছে:{" "}
              <span className="font-bold text-primary">
                {filteredPeople.length}
              </span>{" "}
              জন
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {paginatedPeople.map((person) => (
                  <motion.div
                    key={person.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center gap-4"
                  >
                    <input
                      type="checkbox"
                      checked={selectedVoters.some((v) => v.id === person.id)}
                      onChange={() => toggleVoter(person)}
                      className="size-5 shrink-0 rounded accent-primary"
                    />
                    <div
                      className="group flex-1 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <User className="size-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground">
                              {person.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              আইডি: {person.id}
                            </p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-muted px-2 py-1 text-xs font-bold">
                          {person.date_of_birth}
                        </div>
                      </div>

                      <hr className="my-4 border-border/50" />

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            পিতার নাম
                          </p>
                          <p className="font-medium">{person.father_name}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            মাতার নাম
                          </p>
                          <p className="font-medium">{person.mother_name}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <span className="text-sm">{`ভোটার নং: ${person.voter_no}`}</span>
                        <span className="text-sm">{`পেশা: ${person.job}`}</span>
                      </div>

                      <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                        <MapPin className="mt-0.5 size-3 shrink-0 text-primary" />
                        <span>{`${person.address.area}, ${person.address.locality}, ${person.address.sub_district}, ${person.address.district}`}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2 pb-10">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-primary/10 disabled:opacity-50"
                >
                  <ChevronLeft className="size-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl font-bold transition-all",
                        currentPage === page
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "border border-border bg-card hover:bg-primary/10",
                      )}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-primary/10 disabled:opacity-50"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}

            {filteredPeople.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search className="mb-4 size-12 text-muted-foreground/30" />
                <p className="text-lg font-medium text-muted-foreground">
                  কোনো তথ্য পাওয়া যায়নি
                </p>
              </div>
            )}
          </main>

          <aside className="col-span-3 flex flex-col border-l bg-card">
            <div className="p-4 border-b bg-muted/30 flex justify-between items-center">
              <h3 className="font-bold">নির্বাচিত তালিকা</h3>
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                {selectedVoters.length}/50
              </span>
            </div>

            {/* Selected Users List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {selectedVoters.length === 0 ? (
                <div className="mt-20 text-center text-muted-foreground">
                  <p className="text-sm">কোনো ভোটার নির্বাচিত নেই</p>
                </div>
              ) : (
                selectedVoters.map((voter) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={voter.id}
                    className="flex items-center justify-between rounded-lg border bg-background p-2 text-sm"
                  >
                    <span className="truncate font-medium">{voter.name}</span>
                    <button
                      onClick={() => toggleVoter(voter)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X size={14} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Action Buttons */}
            <div className="border-t p-4 space-y-3">
              <button
                disabled={selectedVoters.length === 0}
                onClick={() => navigate("/slip")}
                className="w-full rounded-xl bg-primary py-3 font-bold text-primary-foreground shadow-lg disabled:opacity-50"
              >
                স্লিপ জেনারেট করুন ({selectedVoters.length})
              </button>
              <button
                onClick={() => clearAll()}
                className="w-full text-xs font-medium text-muted-foreground hover:text-destructive"
              >
                সব ক্লিয়ার করুন
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
