export function SiteCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-lg text-brand">✦</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-white/70">{text}</p>
    </div>
  );
}
