import useAuthStore from "@/store/useAuthStore";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Lock, ShieldCheck, User } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  // Modern Form Submit Handling
  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    navigate("/");
    console.log("Logging in...");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 font-sans">
      {/* Background Interactive Mesh */}
      <motion.div
        animate={{
          scale: isFocus ? 1.2 : 1,
          rotate: isFocus ? 10 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute -z-10 h-[150%] w-[150%] opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 size-[600px] rounded-full bg-primary blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 size-[600px] rounded-full bg-chart-2 blur-[160px]" />
      </motion.div>

      <div className="grid w-full max-w-5xl gap-0 overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/30 shadow-2xl backdrop-blur-2xl md:grid-cols-2">
        {/* Left Side: Branding & Security Message */}
        <div className="relative hidden flex-col justify-between bg-primary p-12 text-primary-foreground md:flex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-md">
              <ShieldCheck className="size-10" />
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight">
              আপনার তথ্যের নিরাপত্তা <br /> আমাদের অগ্রাধিকার।
            </h1>
            <p className="text-lg text-primary-foreground/70">
              ই-অ্যাপ পোর্টালে লগইন করে আপনার ভোটার তথ্য ও নির্বাচনী সেবাগুলো
              গ্রহণ করুন।
            </p>
          </motion.div>

          <div className="flex gap-4 text-sm font-medium text-primary-foreground/50">
            <span>© ২০২৬ ই-অ্যাপ</span>
            <span>•</span>
            <span>সহায়তা</span>
          </div>

          {/* Abstract SVG Decoration */}
          <div className="absolute bottom-0 right-0 h-full w-full overflow-hidden opacity-10 pointer-events-none">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <circle cx="100" cy="100" r="40" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Right Side: Animated Login Form */}
        <div className="p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              স্বাগতম!
            </h2>
            <p className="mt-2 text-muted-foreground">চালিয়ে যেতে লগইন করুন</p>

            <form onSubmit={handleLogin} className="mt-10 space-y-6">
              {/* User ID Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/70 ml-1">
                  এনআইডি / ইউজার আইডি
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <input
                    type="text"
                    required
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    placeholder="আপনার আইডি লিখুন"
                    className="w-full rounded-2xl border border-border bg-background/50 py-4 pl-12 pr-4 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label className="text-sm font-semibold text-foreground/70">
                    পাসওয়ার্ড
                  </label>
                  <button
                    type="button"
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-border bg-background/50 py-4 pl-12 pr-12 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary py-4 text-lg font-bold text-primary-foreground shadow-xl transition-all"
              >
                লগইন করুন
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
