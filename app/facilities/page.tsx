import Link from "next/link";

const facilityGroups = [
  {
    title: "Core dining spaces",
    items: ["Food hall kiosks", "Family seating zones", "Fast casual service counters"],
  },
  {
    title: "Guest comfort",
    items: ["Natural light access", "Comfort-focused circulation", "Clean and easy-to-maintain surfaces"],
  },
  {
    title: "Operational flow",
    items: ["Back-of-house access", "Supportive service paths", "Flexible event or pop-up use"],
  },
];

export default function FacilitiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Facilities</p>
        <h1 className="mt-3 text-4xl font-black text-white">Built for dining, gathering, and easy everyday movement.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {facilityGroups.map((group) => (
          <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold text-white">{group.title}</h2>
            <ul className="mt-5 space-y-3 text-white/70">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
        <img src="/images/food-court-render.svg" alt="Nxzora Fresh facilities render" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
      </div>

      <div className="mt-14 rounded-[2rem] border border-brand/30 bg-brand/10 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Need more details?</p>
        <h2 className="mt-3 text-3xl font-black text-white">We can adapt the concept to your site and business model.</h2>
        <Link href="/#contact" className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">
          Send an enquiry
        </Link>
      </div>
    </div>
  );
}
