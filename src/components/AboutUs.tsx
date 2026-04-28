import { motion, type Variants } from "framer-motion";
import React from "react";

export const AboutUs: React.FC = () => {
  // Animation Variants
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // Now correctly inferred as a valid easing literal
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 px-6 md:py-24">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Article Content - Slides from Left */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={textVariants}
            className="flex flex-col space-y-6"
          >
            <motion.h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
              আমাদের <span className="text-primary">লক্ষ্য ও উদ্দেশ্য</span>
            </motion.h2>

            <motion.div className="space-y-4 font-sans text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-muted-foreground">
              <p>
                আমরা একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যার লক্ষ্য
                বাংলাদেশের নির্বাচনী প্রক্রিয়াকে আরও সহজ, স্বচ্ছ ও কার্যকর করা।
                আমাদের এই ওয়েব অ্যাপের মাধ্যমে ভোটাররা সহজেই তাদের ব্যক্তিগত
                তথ্য যাচাই করতে পারবেন, দ্রুত ভোটার স্লিপ সংগ্রহ করতে পারবেন এবং
                গুরুত্বপূর্ণ আপডেট পেতে এসএমএস ও কল সাপোর্ট ব্যবহার করতে পারবেন।
              </p>
              <p>
                আমাদের বিশ্বাস, প্রযুক্তির সঠিক ব্যবহার নির্বাচনী অংশগ্রহণ
                বাড়াতে এবং ভোটারদের অভিজ্ঞতা উন্নত করতে পারে। তাই আমরা এমন একটি
                নির্ভরযোগ্য ও ব্যবহারবান্ধব সিস্টেম তৈরি করেছি, যেখানে প্রতিটি
                ভোটার সহজে তথ্য পাবে, সময় বাঁচাবে এবং আত্মবিশ্বাসের সাথে
                নির্বাচনে অংশ নিতে পারবে।
              </p>
              <p className="font-semibold text-foreground border-l-4 border-primary pl-4">
                স্বচ্ছতা, নিরাপত্তা এবং সহজলভ্যতাই আমাদের মূল লক্ষ্য—যাতে
                প্রতিটি ভোটার পায় একটি ঝামেলামুক্ত ও আধুনিক নির্বাচনী অভিজ্ঞতা।
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="pt-4">
              <button className="rounded-xl bg-accent px-8 py-3 font-bold text-accent-foreground shadow-md transition-transform hover:scale-105 active:scale-95">
                আরও জানুন
              </button>
            </motion.div>
          </motion.article>

          {/* Image Section - Fades In */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative z-10 aspect-square overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800"
                alt="Digital Election Representation"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-6 -right-100 z-10 size-96 rounded-full bg-primary/30 blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-300 z-10 size-96 rounded-full bg-chart-2/30 blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
