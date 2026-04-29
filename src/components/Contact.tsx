import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Globe, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Using the more specific type for modern React environments
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-20 font-sans"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-30">
        <div className="absolute top-[10%] left-[10%] size-96 animate-pulse rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] size-96 rounded-full bg-chart-2/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 grid w-full max-w-6xl gap-0 overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/50 shadow-2xl backdrop-blur-xl lg:grid-cols-5"
      >
        {/* Left Side: Info (2 Columns) */}
        <div className="relative flex flex-col justify-between bg-primary p-8 text-primary-foreground lg:col-span-2 lg:p-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-tight">
                চলুন কথা বলি!
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                আপনার যেকোনো জিজ্ঞাসা আমাদের ডিজিটাল টিমকে জানান। আমরা আপনার
                সেবায় নিয়োজিত।
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Phone, text: "+৮৮০ ১৭০০-০০০০০০" },
                { icon: MapPin, text: "ঢাকা, বাংলাদেশ" },
                { icon: Globe, text: "www.eapp-election.com" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10">
                    <item.icon className="size-5" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative SVG Pattern */}
          <div className="absolute bottom-0 right-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="150" cy="150" r="100" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Right Side: Form (3 Columns) */}
        <div className="p-8 lg:col-span-3 lg:p-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group relative">
                    <input
                      type="text"
                      required
                      className="peer w-full border-b-2 border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary"
                    />
                    <label className="absolute top-2 left-0 -z-10 origin-left text-muted-foreground transition-all peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                      আপনার নাম
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      required
                      className="peer w-full border-b-2 border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary"
                    />
                    <label className="absolute top-2 left-0 -z-10 origin-left text-muted-foreground transition-all peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                      ইমেইল ঠিকানা
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <textarea
                    required
                    rows={4}
                    className="peer w-full border-b-2 border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary resize-none"
                  />
                  <label className="absolute top-2 left-0 -z-10 origin-left text-muted-foreground transition-all peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                    আপনার বিস্তারিত বার্তা
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    বার্তা পাঠান{" "}
                    <Send className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center text-center"
              >
                <div className="mb-6 rounded-full bg-primary/20 p-4 text-primary">
                  <CheckCircle2 className="size-16 animate-bounce" />
                </div>
                <h3 className="text-3xl font-bold">অভিনন্দন!</h3>
                <p className="mt-2 text-muted-foreground">
                  আপনার বার্তাটি সফলভাবে গৃহীত হয়েছে।
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 font-bold text-primary hover:underline"
                >
                  নতুন বার্তা লিখুন
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
