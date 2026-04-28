import { motion } from "framer-motion";
import React from "react";
import { Bell, IdCard, PhoneIncoming, Ticket } from "lucide-react"; // Use your preferred icon library

// Icons (Placeholders, replace with actual icons like lucide-react)
const iconClass =
  "size-10 text-primary transition-colors group-hover:text-primary-foreground";
const services = [
  {
    icon: IdCard,
    title: "ভোটার বিস্তারিত",
    brief:
      "আপনার এনআইডি নম্বর বা ফর্ম নম্বর ব্যবহার করে সহজেই আপনার ভোটার তালিকার সমস্ত তথ্য অনলাইনে যাচাই করুন। আপনার নাম, ঠিকানা, এবং ভোটকেন্দ্রের সঠিক তথ্য তাৎক্ষণিকভাবে জেনে নিন।",
  },
  {
    icon: Ticket,
    title: "ভোটার স্লিপ সংগ্রহ",
    brief:
      "ভোটকেন্দ্রে যাওয়ার আগে আপনার ডিজিটাল ভোটার স্লিপটি ডাউনলোড করে প্রিন্ট বা সেভ করে রাখুন। এটি আপনাকে দ্রুত ভোট দিতে এবং লাইনে দাঁড়ানোর সময় বাঁচাতে সাহায্য করবে।",
  },
  {
    icon: Bell,
    title: "ভোটারদের জন্য SMS",
    brief:
      "নির্বাচন সংক্রান্ত সব গুরুত্বপূর্ণ আপডেট, যেমন- ভোটকেন্দ্রের পরিবর্তন, তারিখ বা ভোটার তালিকার আপডেট সরাসরি আপনার নিবন্ধিত মোবাইল নম্বরে SMS-এর মাধ্যমে পান।",
  },
  {
    icon: PhoneIncoming,
    title: "ভোটারদের জন্য কল সাপোর্ট",
    brief:
      "ভোটার তথ্য যাচাই বা স্লিপ সংগ্রহে কোনো সমস্যা হলে আমাদের ডেডিকেটেড হেল্পলাইন নম্বরে কল করুন। আমাদের প্রতিনিধিরা আপনাকে সহায়তা করতে সর্বদা প্রস্তুত।",
  },
];

export const OurServices: React.FC = () => {
  return (
    <section className="relative bg-muted py-20 px-6 md:py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Heading with Clamp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
            সেবা তালিকা
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-tight text-foreground max-w-2xl">
            আমাদের <span className="text-primary">সেবাসমূহ</span>
          </h2>
          <p className="mt-6 text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-muted-foreground max-w-xl">
            আধুনিক নির্বাচনী অভিজ্ঞতার জন্য আমরা ভোটারদের দিচ্ছি সহজ ও স্মার্ট
            ডিজিটাল সেবা।
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20"
              >
                {/* --- Hover Animation Overlay --- */}
                <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-linear-to-br from-primary/80 via-primary/20 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-0 blur-3xl" />

                {/* --- Card Content --- */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/10 transition-colors">
                      <Icon className={iconClass} />
                    </div>
                    <span className="text-6xl font-bold text-muted/30 group-hover:text-primary-foreground/10 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-foreground group-hover:text-primary-foreground transition-colors mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/90 transition-colors grow mb-6">
                    {service.brief}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-foreground transition-colors cursor-pointer">
                      বিস্তারিত জানুন
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 size-96 rounded-full bg-chart-1/5 blur-3xl" />
    </section>
  );
};
