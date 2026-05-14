import { useImageUpload } from "@/hooks/useImageUpload";
import { ArrowLeft, Camera, CheckCircle2, FilePlus, Trash2, User } from "lucide-react";
import { useNavigate } from "react-router";

export const ImageSetting = () => {
  const navigate = useNavigate();

  const normalPhoto = useImageUpload();
  const slipPhoto = useImageUpload();

  return (
    <div className="min-h-dvh bg-[#F8FAFC] pb-10 font-sans">
      <header className="sticky top-0 z-50 flex items-center gap-4 border-b bg-white px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowLeft className="size-6 text-[#1E3A8A]" />
        </button>
        <h1 className="text-xl font-bold text-[#1E3A8A]">ছবি সম্পাদনা</h1>
      </header>
      <main className="mx-auto max-w-2xl px-4 pt-8">
        <div className="space-y-6">
          
          {/* 1. Normal Image Upload (For Voter Details) */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-bold text-[#1E293B]">
              <User className="size-5 text-[#1E3A8A]" />
              <span>প্রোফাইল ছবি আপলোড</span>
            </div>
            
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative mb-6">
                <div className="size-32 overflow-hidden rounded-3xl border-4 border-[#E0F2FE] bg-gray-50 shadow-inner">
                  {normalPhoto.preview ? (
                    <img src={normalPhoto.preview} className="h-full w-full object-cover" alt="Preview" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-300">
                      <User size={48} />
                    </div>
                  )}
                </div>
                {normalPhoto.preview && (
                  <button 
                    onClick={normalPhoto.clearImage}
                    className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>

              <label className="flex cursor-pointer items-center gap-2 rounded-2xl bg-[#1E3A8A] px-6 py-3 font-bold text-white transition-all active:scale-95">
                <Camera size={20} />
                ছবি নির্বাচন করুন
                <input type="file" className="hidden" accept="image/*" onChange={normalPhoto.handleUpload} />
              </label>
              <p className="mt-3 text-xs text-[#64748B]">এটি ভোটার বিস্তারিত পাতায় প্রদর্শিত হবে।</p>
            </div>
          </section>

          {/* 2. Voter Slip Image Upload (Placeholder for later) */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-bold text-[#1E293B]">
              <FilePlus className="size-5 text-[#1E3A8A]" />
              <span>ভোটার স্লিপ ছবি</span>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-100 py-10 transition-colors hover:border-[#1E3A8A]/30">
              {slipPhoto.preview ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-xl bg-green-50 p-4 text-green-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <span className="text-sm font-bold text-green-600">স্লিপ ইমেজ লোড হয়েছে</span>
                  <button onClick={slipPhoto.clearImage} className="text-xs text-red-500 underline">রিসেট করুন</button>
                </div>
              ) : (
                <>
                  <label className="flex cursor-pointer flex-col items-center gap-2 text-[#94A3B8]">
                    <div className="rounded-full bg-[#F0F7FF] p-4 text-[#1E3A8A]">
                      <FilePlus size={32} />
                    </div>
                    <span className="text-sm font-medium">স্লিপের ছবি এখানে ড্রপ করুন বা ক্লিক করুন</span>
                    <input type="file" className="hidden" accept="image/*" onChange={slipPhoto.handleUpload} />
                  </label>
                </>
              )}
            </div>
          </section>

          {/* Save Action */}
          <button className="w-full rounded-2xl bg-[#00337C] py-4 text-lg font-bold text-white shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            পরিবর্তন সংরক্ষণ করুন
          </button>
        </div>
      </main>
    </div>
  );
};
