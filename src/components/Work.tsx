"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Work() {
  const reduced = useReducedMotion();
  const w = content.work;

  return (
    <section id="work" className="relative py-24 md:py-32 bg-bg-section/60">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{w.eyebrow}</span>
          <a
            href="#"
            className="font-mono text-[11px] tracking-[0.22em] text-ink hover:text-accent"
          >
            FULL INDEX ↗
          </a>
        </div>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.95] tracking-tight"
        >
          {w.heading}
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-12 gap-x-8 gap-y-16">
          {w.items.map((c, i) => (
            <motion.a
              key={c.number}
              href="#"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`md:col-span-6 group block ${i % 2 === 1 ? "md:translate-y-16" : ""}`}
            >
              <div className="flex items-baseline justify-between font-mono text-[11px] tracking-[0.2em] text-ink-muted mb-4">
                <span>No. {c.number}</span>
                <span>{c.year}</span>
              </div>
              <div className="relative rounded-3xl overflow-hidden bg-ink aspect-[4/3]">
                <motion.div
                  whileHover={reduced ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
                {/* Chrome wash overlay */}
                <motion.div
                  aria-hidden
                  initial={false}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 chrome-pill"
                  style={{ mixBlendMode: "soft-light" }}
                />
                {/* Metric pill */}
                <div className="absolute top-4 left-4 glass-dark rounded-full px-3 py-1.5 text-bg font-mono text-[11px] tracking-[0.16em] uppercase">
                  {c.metric.label}{" "}
                  <span className="text-accent-2 font-medium">{c.metric.value}</span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif italic text-2xl md:text-3xl leading-tight tracking-tight">
                  {c.project}
                </h3>
                <span className="font-mono text-[11px] tracking-[0.18em] text-accent shrink-0">
                  {c.client}
                </span>
              </div>
              <p className="mt-3 font-sans text-base leading-relaxed text-ink-muted max-w-[58ch]">
                {c.blurb}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
