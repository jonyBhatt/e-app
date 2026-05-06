import type { Feature } from "@/types";
import Idcard from "@/assets/svgs/idcard.svg";
import Slip from "@/assets/svgs/slip.svg";
import Message from "@/assets/images/message.jpeg";
import Call from "@/assets/images/call.png";
export const features: Feature[] = [
  {
    title: "ভোটার তথ্য",
    subtitle: "সহজে আপনার ভোটার তথ্য অনুসন্ধান করুন",
    badge: "ভোটার তথ্য জানুন",
    icon: Idcard,
  },
  {
    title: "ভোটার স্লিপ",
    subtitle: "ডিজিটাল ভোটার স্লিপ তৈরি করুন",
    badge: " স্লিপ ডাউনলোড করুন",
    icon: Slip,
  },
  {
    title: "ভোটারদের মেসেজ",
    subtitle: "ভোটারদের প্রয়োজনীয় এসএমএস বার্তা পাঠান",
    badge: "মেসেজ পাঠান",
    icon: Message,
  },
  {
    title: "ভোটারদের ভয়েস কল",
    subtitle: "রেকর্ড করা ভয়েস মেসেজ দিয়ে কল করুন",
    badge: "ভয়েস কল করুন",
    icon: Call,
  },
];
