import { motion } from "framer-motion";
import { Home, Info, LogIn, Mail, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navLinks: NavItem[] = [
  { label: "হোম", href: "/", icon: Home },
  { label: "সম্পর্কে", href: "#about", icon: Info },
  { label: "অনুসন্ধান", href: "/search", icon: Search },
  { label: "যোগাযোগ", href: "#contact", icon: Mail },
];

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 print:hidden  z-50 hidden w-full border-b border-border  font-sans  md:block bg-transparent backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className=" flex h-20  items-center justify-between ">
            {/* Logo with Clamp Typography */}
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[clamp(1.5rem,4vw,2.2rem)] font-bold tracking-tighter text-primary"
              >
                ই-অ্যাপ
              </motion.div>
            </Link>

            <div className="flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-md font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <Link to={"/login"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-primary-foreground shadow-md transition-shadow hover:shadow-lg"
                >
                  সাইন ইন
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed print:hidden bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 pb-safe font-sans backdrop-blur-md md:hidden">
        <div className="flex h-18 items-center justify-around px-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center p-3 text-muted-foreground active:text-primary"
              >
                <Icon className="size-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            );
          })}

          {/* Mobile Sign In Icon */}
          <Link to={"/login"}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center p-3 text-primary"
            >
              <LogIn className="size-6" />
              <span className="sr-only">সাইন ইন</span>
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Layout Spacers */}
      {/* <div className="h-20 md:block hidden" />
      <div className="h-18 md:hidden block" /> */}
    </>
  );
};
