import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/919987448073?text=Hi%2C%20I%20want%20to%20discuss%20a%20website%20project."
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#25D366] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-3px_0_rgba(0,0,31,0.24),0_12px_24px_rgba(0,0,31,0.34)] transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-3px_0_rgba(0,0,31,0.2),0_18px_42px_rgba(37,211,102,0.34),0_0_30px_rgba(37,211,102,0.34)] active:translate-y-0 active:scale-95 sm:bottom-6 sm:right-8 sm:h-14 sm:w-14"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.01 3.2c-6.95 0-12.6 5.56-12.6 12.4 0 2.34.67 4.6 1.94 6.56l-1.29 6.64 6.82-1.54a12.8 12.8 0 0 0 5.13 1.05c6.95 0 12.6-5.56 12.6-12.4s-5.65-12.71-12.6-12.71Zm0 22.86c-1.73 0-3.42-.44-4.91-1.28l-.36-.2-4.08.92.77-3.97-.24-.38a10.02 10.02 0 0 1-1.54-5.35c0-5.6 4.65-10.15 10.36-10.15s10.36 4.55 10.36 10.15-4.65 10.26-10.36 10.26Zm5.83-7.57c-.32-.16-1.9-.92-2.2-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.55-.95-.84-1.6-1.88-1.78-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.72-1.7-.98-2.33-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.58s1.13 3 1.29 3.21c.16.21 2.23 3.36 5.4 4.71.76.32 1.35.52 1.81.66.76.24 1.45.21 1.99.13.61-.09 1.9-.76 2.17-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </Link>
  );
}
