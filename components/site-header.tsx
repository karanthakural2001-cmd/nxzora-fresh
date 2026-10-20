import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0b0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-soft font-black text-white">
            N
          </div>
          <div>
            <div className="text-lg font-black tracking-tight">Nxzora Fresh</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Food court concept</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white/80 md:flex">
          <Link href="/" className="hover:text-brand">Home</Link>
          <Link href="/about" className="hover:text-brand">About</Link>
          <Link href="/facilities" className="hover:text-brand">Facilities</Link>
          <Link href="#contact" className="hover:text-brand">Contact</Link>
          <Link href="/privacy" className="hover:text-brand">Privacy</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+919876543210" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:border-brand/60 hover:text-brand">
            Call now
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-soft">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
