export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#00001F]/86 px-6 text-white backdrop-blur-md">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(22,216,255,0.035)_40%,rgba(124,60,255,0.12))] px-8 py-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_80px_rgba(0,0,31,0.36)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.78),transparent)]" />
        <div className="mx-auto h-10 w-10 rounded-full border-2 border-white/12 border-t-cyan-100 animate-spin" />
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/58">
          Loading
        </p>
      </div>
    </div>
  );
}
