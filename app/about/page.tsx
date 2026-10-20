import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">About us</p>
        <h1 className="mt-3 text-4xl font-black text-white">A fresh idea shaped around people, flavour, and community.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-white/75">
          <p>
            Nxzora Fresh was envisioned as a welcoming food destination that blends convenience with comfort. The concept focuses on a modern, vibrant atmosphere where families, students, professionals, and casual diners can enjoy a relaxed experience without sacrificing variety.
          </p>
          <p>
            We believe the best food courts feel alive. They are easy to navigate, thoughtfully designed, and offer enough diversity to satisfy different tastes and dining habits. That is the core idea behind Nxzora Fresh: a destination that feels fresh, flexible, and genuinely enjoyable to visit.
          </p>
          <p>
            From quick lunches to long evening catch-ups, the space is planned to support everyday routines and memorable social moments. Every element, from circulation to seating and service activity, is designed to create a positive and practical guest experience.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
          <img src="/images/food-court-render.svg" alt="Nxzora Fresh concept render" className="h-full w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { title: "People-first", text: "Thoughtful layout and social spaces that feel welcoming for all ages." },
          { title: "Varied dining", text: "A mix of formats to suit quick meals, gathering moments, and everyday comfort." },
          { title: "Built for growth", text: "A scalable model created for modern neighbourhood and urban foot traffic." },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-white/70">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-brand/30 bg-brand/10 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Next step</p>
        <h2 className="mt-3 text-3xl font-black text-white">Ready to make the concept real?</h2>
        <Link href="/#contact" className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">
          Enquire now
        </Link>
      </div>
    </div>
  );
}
