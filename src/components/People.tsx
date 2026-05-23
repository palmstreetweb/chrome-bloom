"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function People() {
  const reduced = useReducedMotion();
  const p = content.people;

  return (
    <section id="people" className="relative py-24 md:py-32 bg-bg-section/60 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/2 translate-x-1/2 w-[820px] h-[820px] rounded-full orb-bg opacity-50"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{p.eyebrow}</span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-ink-faint">
            EST. MMXXI
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-end">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 font-serif italic text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.95] tracking-tight"
          >
            {p.heading}
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="md:col-span-5 font-sans text-lg leading-relaxed text-ink-muted"
          >
            {p.body}
          </motion.p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {p.members.map((m, i) => (
            <motion.figure
              key={m.name}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-ink">
                <motion.div
                  whileHover={reduced ? undefined : { scale: 1.04 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(120% 60% at 50% 100%, rgba(123,63,242,0.55), transparent 60%)",
                  }}
                />
                <div className="absolute inset-x-4 bottom-4 glass-dark rounded-2xl px-4 py-3 text-bg">
                  <div className="font-serif italic text-xl leading-tight">{m.name}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-bg/70">
                    {m.role} · {m.pronoun}
                  </div>
                </div>
              </div>
              <figcaption className="mt-4 font-serif italic text-lg text-ink leading-snug">
                “{m.quote}”
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
