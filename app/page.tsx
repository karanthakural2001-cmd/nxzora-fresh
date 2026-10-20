import Link from "next/link";
import { planDetails } from "@/lib/plans";
import { SiteCard } from "@/components/site-card";

const heroStats = [
  { value: "12+", label: "Food kiosks" },
  { value: "3000+", label: "Sq. ft. dining" },
  { value: "4.9/5", label: "Guest satisfaction" },
];

const highlightCards = [
  { title: "Curated Food Variety", text: "Family-friendly food hall experiences with familiar favourites and local flavours." },
  { title: "Comfortable Seating", text: "A warm, breathable interior designed for quick meals and relaxed family gatherings." },
  { title: "Smart Layout", text: "Flexible operational zones to support service flow, events, and high foot traffic." },
];

const gallery = [
  "/images/gallery-1.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
  "/images/gallery-4.svg",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,10,127,0.30),_transparent_52%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="animate-fadeUp">
            <span className="inline-flex items-center rounded-full border border-brand/50 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Fresh. Vibrant. Social.
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              A new food court experience built for everyday joy.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/75">
              Nxzora Fresh brings together neighbourhood dining, local flavours, and a welcoming family atmosphere in one beautifully planned destination.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#contact" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">
                Enquire now
              </Link>
              <Link href="/about" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand/60 hover:text-brand">
                Learn more
              </Link>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-transparent blur-3xl" />
            <img src="/images/food-court-render.svg" alt="Nxzora Fresh concept render" className="relative w-full max-w-xl rounded-[2rem] border border-white/10 shadow-2xl shadow-brand/20" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Why guests love us</p>
            <h2 className="mt-3 text-3xl font-black text-white">Designed for movement, comfort, and flavour.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlightCards.map((card) => (
            <SiteCard key={card.title} title={card.title} text={card.text} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">About the concept</p>
              <h2 className="mt-3 text-3xl font-black text-white">A destination where fresh food meets community culture.</h2>
              <p className="mt-4 text-white/70">
                Nxzora Fresh is imagined as a modern food court with inviting social spaces, clear circulation, and flexible dining frontage that works for casual breaks, family outings, and busy everyday dining.
              </p>
              <Link href="/about" className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-brand/60 hover:text-brand">
                Read our story
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.14em] text-brand">Atmosphere</p>
                <p className="mt-3 text-2xl font-bold text-white">Warm, lively, and easy to navigate.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.14em] text-brand">Offerings</p>
                <p className="mt-3 text-2xl font-bold text-white">Mix of quick bites, dessert, coffee, and family dining.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
                <p className="text-sm uppercase tracking-[0.14em] text-brand">Best for</p>
                <p className="mt-3 text-2xl font-bold text-white">Weekday lunches, weekend outings, and local gathering moments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facilities" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Facilities</p>
            <h2 className="mt-3 text-3xl font-black text-white">Everything planned for comfort and flow.</h2>
          </div>
          <Link href="/facilities" className="hidden text-sm font-semibold text-brand underline-offset-4 hover:underline sm:inline-flex">
            View all facilities
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Food hall units",
            "Family dining zones",
            "Open circulation",
            "Event-ready areas",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-lg text-brand">✓</div>
              <h3 className="text-xl font-bold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Gallery</p>
          <h2 className="mt-3 text-3xl font-black text-white">Concept render preview.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <img src={image} alt={`Nxzora Fresh gallery ${index + 1}`} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Plans</p>
            <h2 className="mt-3 text-3xl font-black text-white">Flexible opportunities to match your vision.</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {planDetails.map((plan) => (
            <div key={plan.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-brand">{plan.name}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-white/60">{plan.term}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-brand">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Get in touch</p>
            <h2 className="mt-3 text-3xl font-black text-white">Start your conversation with Nxzora Fresh.</h2>
            <p className="mt-4 text-white/70">
              Share your goals, preferred tenancy model, or concept requirements and we&apos;ll help shape the next step.
            </p>
            <div className="mt-8 space-y-4 text-sm text-white/80">
              <a href="tel:+919876543210" className="block hover:text-brand">Phone: +91 98765 43210</a>
              <a href="mailto:hello@nxzorafresh.com" className="block hover:text-brand">Email: hello@nxzorafresh.com</a>
              <p>Location: Concept site and customer enquiry desk</p>
            </div>
          </div>
          <div>
            <form action="/api/enquiry" method="POST" className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-white/70">
                  <span className="mb-2 block">Name</span>
                  <input name="name" type="text" required className="w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30 focus:border-brand" placeholder="Your name" />
                </label>
                <label className="block text-sm text-white/70">
                  <span className="mb-2 block">Email</span>
                  <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30 focus:border-brand" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block text-sm text-white/70">
                <span className="mb-2 block">Company / business</span>
                <input name="company" type="text" className="w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30 focus:border-brand" placeholder="Your brand or company" />
              </label>
              <label className="block text-sm text-white/70">
                <span className="mb-2 block">Message</span>
                <textarea name="message" required rows={5} className="w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30 focus:border-brand" placeholder="Tell us about your space or enquiry..." />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
