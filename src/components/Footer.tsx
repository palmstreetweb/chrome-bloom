import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-bg/85 pt-20 pb-10 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full orb-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span aria-hidden className="block w-9 h-9 rounded-full chrome-pill ring-2 ring-white/40" />
              <div className="font-sans font-bold text-2xl tracking-[0.16em] text-bg">
                {business.name}
              </div>
            </div>
            <p className="mt-4 font-serif italic text-xl text-bg/80 max-w-[36ch] leading-snug">
              {business.tagline}
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/40 mb-3">
              Index
            </div>
            <ul className="space-y-2 font-sans text-base">
              {content.nav.links.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-accent-2" href={l.href}>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/40 mb-3">
              Elsewhere
            </div>
            <ul className="space-y-2 font-sans text-base">
              {business.socials.map((s) => (
                <li key={s.href}>
                  <a className="hover:text-accent-2" href={s.href}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/40 mb-3">
              Studio
            </div>
            <div className="font-sans text-base text-bg/90">
              <a href={`mailto:${business.email}`} className="hover:text-accent-2">
                {business.email}
              </a>
              <div className="mt-2 text-sm text-bg/60">{business.phone}</div>
              <div className="mt-3 text-sm text-bg/60">{business.address}</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-bg/20 flex flex-wrap items-baseline justify-between gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span className="normal-case tracking-normal font-sans text-bg/60">
            {content.footer.copyright}
          </span>
          <div className="flex items-center gap-6 text-bg/70">
            {content.footer.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent-2">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
