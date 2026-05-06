import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Info, Mail, Menu, Search } from "lucide-react";
import { Link } from "react-router";
import Logo from "@/assets/logo.webp";

const navLinks = [
  { label: "হোম", href: "/", icon: Home },
  { label: "সম্পর্কে", href: "#about", icon: Info },
  { label: "অনুসন্ধান", href: "/search", icon: Search },
  { label: "যোগাযোগ", href: "#contact", icon: Mail },
];

export default function PwaHeader() {
  return (
    <nav className="p-4 h-20 bg-blue-700 flex items-center justify-between">
      {/* Left: Menu Button */}
      <Sheet>
        <SheetTrigger className="text-white">
          <Menu size={22} />
        </SheetTrigger>

        <SheetContent side="left" className="w-64">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">সহজ ইলেকশন</SheetTitle>
          </SheetHeader>

          {/* Navigation Links */}
          <div className="mt-6 flex flex-col gap-4">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <SheetClose asChild key={index}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>

      {/* Center: App Name */}
      <div className="flex flex-col items-center">
        <p className="font-sans text-sm text-gray-200">
          স্বাগতম, আপনার নির্বাচন সহায়ক
        </p>
      <h1 className="text-white font-semibold font-sans text-lg">
        সহজ ইলেকশন
      </h1>
      </div>

      {/* Right: Optional (empty or icon later) */}
      <div className="" >
        <img src={Logo} alt="logo" className="size-14" loading="lazy" />
      </div>
    </nav>
  );
}
