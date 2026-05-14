import React, { useState } from "react";
import {
  Bell,
  Globe,
  Shield,
  Info,
  ChevronRight,
  UserRound,
  Camera,
  ArrowLeft,
  LayoutDashboard,
  Users,
  Settings as SettingsIcon,
  UserRoundPen,
  TypeOutline,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router";

export const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
      {/* 1. App Header */}
      <header className="sticky top-0 z-50 flex items-center gap-4 border-b bg-white px-6 py-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-2 hover:bg-gray-100">
          <ArrowLeft className="size-6 text-[#1E3A8A]" />
        </button>
        <h1 className="text-xl font-bold text-[#1E3A8A]">প্সেটিংস</h1>
      </header>

      <main className="mx-auto max-w-2xl px-4 pt-6">
        <h2 className="mb-6 text-3xl font-black text-[#1E293B]">সেটিংস</h2>

        {/* 2. Profile Card */}
        <div className="mb-8 rounded-3xl border border-blue-50 bg-white p-8 shadow-sm">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              className="size-8"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-[#1E293B]">মোহাম্মদ আলী</h3>
            <p className="font-medium text-[#64748B]">
              সিস্টেম অ্যাডমিনিস্ট্রেটর
            </p>
            <p className="text-sm text-[#94A3B8]">admin.ali@election.gov.bd</p>
          </div>

          <button className="mt-6 rounded-xl border-2 border-[#1E3A8A] px-8 py-2.5 font-bold text-[#1E3A8A] transition-all hover:bg-[#1E3A8A] hover:text-white active:scale-95">
            প্রোফাইল সম্পাদনা
          </button>
        </div>

        {/* 3. General Settings Section */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-[#1E293B]">
            সাধারণ সেটিংস
          </h4>
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <SettingItem
              icon={Bell}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
              title="নোটিফিকেশন"
              subtitle="পুশ এবং ইমেইল সতর্কতা"
            >
              {/* iOS Style Switch */}
              <button
                onClick={() => setNotifications(!notifications)}
                className={cn(
                  "relative h-6 w-11 rounded-full transition-colors duration-300",
                  notifications ? "bg-[#1E3A8A]" : "bg-gray-300",
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 size-4 rounded-full bg-white transition-all duration-300",
                    notifications ? "left-6" : "left-1",
                  )}
                />
              </button>
            </SettingItem>

            <SettingItem
              icon={Globe}
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
              title="ভাষা"
              subtitle="বাংলা (ডিফল্ট)"
              hasArrow
            />

            <SettingItem
              icon={UserRoundPen}
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
              title="ছবি"
              subtitle="ছবি সম্পাদনা"
              hasArrow
              href="/image-setting"
            />

            <SettingItem
              icon={TypeOutline}
              iconBg="bg-purple-50"
              iconColor="text-indigo-600"
              title="স্লোগান"
              subtitle="স্লোগান সেট করুন"
              hasArrow
              href="/slogan"
            />

            <SettingItem
              icon={Shield}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
              title="নিরাপত্তা ও পাসওয়ার্ড"
              subtitle="পাসওয়ার্ড পরিবর্তন ও 2FA"
              hasArrow
              isLast
            />
          </div>
        </div>

        {/* 4. App Info Section */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-[#1E293B]">
            অ্যাপ সম্পর্কে
          </h4>
          <div className="rounded-3xl border border-gray-100 bg-white p-1 shadow-sm">
            <SettingItem
              icon={Info}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
              title="সংস্করণ"
              subtitle="v2.4.1 (Stable)"
              isLast
            >
              <button className="text-sm font-bold text-[#1E3A8A] hover:underline">
                আপডেট চেক করুন
              </button>
            </SettingItem>
          </div>
        </div>
      </main>

   
    </div>
  );
};

// Sub-component for Setting Rows
const SettingItem = ({
  icon: Icon,
  title,
  subtitle,
  children,
  hasArrow,
  isLast,
  iconBg,
  iconColor,
  href
}: any) => (
  <Link to={href}
    className={cn(
      "flex items-center justify-between p-5 transition-colors hover:bg-gray-50 cursor-pointer",
      !isLast && "border-b border-gray-100",
    )}
  >
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-2xl",
          iconBg,
          iconColor,
        )}
      >
        <Icon className="size-6" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[#1E293B]">{title}</span>
        <span className="text-sm text-[#64748B]">{subtitle}</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      {children}
      {hasArrow && <ChevronRight className="size-5 text-gray-400" />}
    </div>
  </Link>
);
