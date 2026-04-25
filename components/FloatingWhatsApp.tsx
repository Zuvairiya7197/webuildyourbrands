import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#16d8ff,#35ff92)] text-[#00001F] shadow-[0_14px_36px_rgba(22,216,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_18px_48px_rgba(22,216,255,0.42)] active:translate-y-0 active:scale-95 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </Link>
  );
}
