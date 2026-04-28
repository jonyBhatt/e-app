import { motion, type Variants } from "framer-motion";
import {
  BellRing,
  CheckCircle,
  QrCode,
  Search,
  ShieldCheck,
} from "lucide-react";
import React from "react";

// Variants for staggered text entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Custom cubic-bezier for smoothness
  },
};

// Variants for floating cards
const floatingVariants = (delay: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background font-sans items-center justify-center flex">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-1/4 size-[500px] rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 size-[500px] rounded-full bg-chart-2/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-10 md:pt-40 md:pb-20">
        <div className="grid gap-16 md:grid-cols-12 md:items-center">
          {/* Left Side: Text Content (7 Columns) */}
          <motion.div
            className="md:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
            >
              <ShieldCheck className="size-4" />
              <span>১০০% নিরাপদ ও আধুনিক নির্বাচন ব্যবস্থা</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tighter text-foreground"
            >
              আপনার{" "}
              <span className="relative inline-block text-primary">
                ভোটার অধিকার
                <motion.svg
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-3 text-chart-4"
                  viewBox="0 0 338 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C118.5 -1 223.5 -1 335 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              , এখন আপনার হাতে।
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed text-muted-foreground"
            >
              সহজেই ভোটার তথ্য যাচাই করুন, ডিজিটাল স্লিপ ডাউনলোড করুন এবং
              নির্বাচনী সব আপডেট পান এক জায়গায়। ই-অ্যাপের মাধ্যমে আপনার
              নির্বাচনী অংশগ্রহণ হোক ঝামেলামুক্ত।
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 20px 40px rgba(var(--primary), 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20"
              >
                তথ্য যাচাই করুন <Search className="size-5" />
              </motion.button>

              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 rounded-xl px-10 py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
              >
                স্লিপ সংগ্রহ <QrCode className="size-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side: Floating Data Visuals (5 Columns) */}
          <div className="relative md:col-span-5 h-[500px] md:h-auto">
            {/* Center Hub Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center blur-[2px]" />
            <QrCode className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 text-primary" />

            {/* Floating Card 1: Voter Slip */}
            <motion.div
              variants={floatingVariants(0)}
              initial="initial"
              animate="animate"
              className="absolute top-0 left-10 z-10 w-60 rounded-2xl border border-border/50 bg-card/80 p-5 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-chart-2/10 text-chart-2">
                  <CheckCircle className="size-6" />
                </div>
                <h4 className="font-bold text-foreground">স্লিপ প্রস্তুত</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                আপনার ডিজিটাল ভোটার স্লিপটি ডাউনলোড করার জন্য তৈরি।
              </p>
              <div className="mt-4 h-2 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="h-full bg-chart-2"
                />
              </div>
            </motion.div>

            {/* Floating Card 2: SMS Notification */}
            <motion.div
              variants={floatingVariants(1)}
              initial="initial"
              animate="animate"
              className="absolute bottom-10 right-0 z-10 w-56 rounded-2xl border border-border/50 bg-card/80 p-5 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <BellRing className="size-6" />
                </div>
                <h4 className="font-bold text-foreground">SMS পাঠানো হয়েছে</h4>
              </div>
              <p className="text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded">
                ভোটকেন্দ্র: ঢাকা কলেজ কেন্দ্র। তারিখ: ০৭/০১/২৪
              </p>
            </motion.div>

            {/* Floating UI Element: Status */}
            <motion.div
              variants={floatingVariants(0.5)}
              initial="initial"
              animate="animate"
              className="absolute top-1/3 -right-5 z-0 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg"
            >
              <div className="size-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">
                সার্ভার স্ট্যাটাস: সচল
              </span>
            </motion.div>

            {/* Decorative Lines connecting to hub */}
            <svg
              className="absolute inset-0 size-full -z-10"
              viewBox="0 0 400 400"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                d="M100 100 L200 200 M300 300 L200 200 M320 150 L200 200"
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
                strokeDasharray="5 5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
