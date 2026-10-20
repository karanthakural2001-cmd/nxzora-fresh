export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090b10]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="text-lg font-black text-white">Nxzora Fresh</div>
          <div className="mt-1">Fresh food destination concept</div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="mailto:hello@nxzorafresh.com" className="hover:text-brand">hello@nxzorafresh.com</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-brand">WhatsApp</a>
          <a href="/privacy" className="hover:text-brand">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
