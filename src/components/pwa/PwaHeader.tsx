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

const navLinks = [
  { label: "হোম", href: "/", icon: Home },
  { label: "সম্পর্কে", href: "#about", icon: Info },
  { label: "অনুসন্ধান", href: "/search", icon: Search },
  { label: "যোগাযোগ", href: "#contact", icon: Mail },
];

export default function PwaHeader() {
  return (
    <nav className="p-4 h-16 bg-blue-700 flex items-center justify-between">
      {/* Left: Menu Button */}
      <Sheet>
        <SheetTrigger className="text-white">
          <Menu size={22} />
        </SheetTrigger>

        <SheetContent side="left" className="w-64">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">ই-অ্যাপ</SheetTitle>
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
      <h1 className="text-white font-semibold text-lg">ই-অ্যাপ</h1>

      {/* Right: Optional (empty or icon later) */}
      <div className="w-6" />
    </nav>
  );
}
