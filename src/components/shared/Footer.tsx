import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const footerLinks = [
  {
    title: "লিঙ্ক",
    links: ["হোম", "সম্পর্কে", "সেবাসমূহ", "যোগাযোগ"],
  },
  {
    title: "আইনি",
    links: ["গোপনীয়তা নীতি", "শর্তাবলী", "কুটি নীতি"],
  },
  {
    title: "সহায়তা",
    links: ["সচরাচর জিজ্ঞাসিত প্রশ্ন", "হেল্প সেন্টার", "সাপোর্ট"],
  },
];

const socialMedia = [
  { name: "Facebook", short: "Fb" },
  { name: "Twitter", short: "Tw" },
  { name: "Instagram", short: "In" },
  { name: "Github", short: "Gh" },
];

export const TextSocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {socialMedia.map((social, i) => (
        <motion.a
          key={social.name}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center overflow-hidden rounded-full border border-background/10 bg-background/5 px-4 py-2 transition-all hover:border-primary/50"
        >
          {/* Animated Background Slide */}
          <motion.div
            variants={{
              hover: { x: 0 },
            }}
            initial={{ x: "-105%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 z-0 bg-primary"
          />

          {/* Social Name Text */}
          <span className="relative z-10 font-sans text-xs font-bold tracking-wider uppercase transition-colors duration-300 group-hover:text-primary-foreground">
            {social.name}
          </span>

          {/* Subtle Glare Effect */}
          <div className="absolute inset-0 z-20 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export const CreativeFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden bg-foreground pt-16 font-sans text-background">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block h-[60px] w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-10">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold tracking-tighter text-primary">
                ই-অ্যাপ
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
                বাংলাদেশের প্রতিটি ভোটারের জন্য একটি আধুনিক ও নিরাপদ ডিজিটাল
                অভিজ্ঞতা নিশ্চিত করাই আমাদের লক্ষ্য। প্রযুক্তির মাধ্যমে
                গণতন্ত্রকে আরও শক্তিশালী করছি।
              </p>
            </motion.div>

            {/* Social Icons with Animation */}
            <TextSocialLinks />
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, colIdx) => (
            <div key={column.title} className="lg:col-span-1">
              <h3 className="mb-6 text-lg font-bold text-primary/80">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIdx * 0.1 + linkIdx * 0.05 }}
                  >
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
                    >
                      {link}
                      <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-bold">নিউজলেটার</h3>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-background/50">
                আমাদের লেটেস্ট আপডেট পেতে সাবস্ক্রাইব করুন।
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="w-full rounded-lg bg-background/5 p-3 text-xs outline-none ring-primary/20 transition-all focus:ring-2"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-primary p-1.5 text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-background/40">
              &copy; {currentYear} ই-অ্যাপ টিম। সর্বস্বত্ব সংরক্ষিত।
            </p>

            <div className="flex items-center gap-8 text-xs font-medium text-background/40">
              <span className="flex items-center gap-2">
                <div className="size-2 animate-pulse rounded-full bg-green-500" />
                সিস্টেম স্ট্যাটাস: অনলাইন
              </span>
              <p>
                ডেভেলপড বাই{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  ই-অ্যাপ টেক
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Text Decoration */}
      <div className="pointer-events-none absolute -bottom-10 left-0 right-0 z-0 select-none text-center text-[15vw] font-bold leading-none text-background/2">
        E-APP
      </div>
    </footer>
  );
};
