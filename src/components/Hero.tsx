"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbRotate = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 90]);
  const orbScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.3]);
  const orbY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 160]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -260]);

  const { hero } = content;

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Iridescent orb */}
      <motion.div
        aria-hidden
        style={{ rotate: orbRotate, scale: orbScale, y: orbY }}
        className="pointer-events-none absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full orb-bg will-change-transform"
      />
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { rotate: [0, -360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full opacity-70"
        style={{
          background: "conic-gradient(from 0deg, rgba(123,63,242,0.4), rgba(63,242,211,0.3), rgba(255,122,198,0.4), rgba(123,63,242,0.4))",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-ink"
        >
          <span className="w-2 h-2 rounded-full bg-accent-2 shadow-[0_0_0_4px_rgba(63,242,211,0.25)]" />
          {hero.status}
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-10 font-sans text-base md:text-lg text-ink-muted"
        >
          {hero.greeting}
        </motion.div>

        {/* Display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-serif italic text-[clamp(3rem,9vw,9rem)] leading-[0.96] tracking-tight"
        >
          {hero.display}{" "}
          <span className="chrome-text not-italic font-sans font-medium">
            {hero.shimmerWord}
          </span>
        </motion.h1>

        {/* Body + CTAs */}
        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="md:col-span-7 font-sans text-lg leading-relaxed text-ink-muted max-w-[60ch]"
          >
            {hero.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end"
          >
            <motion.a
              href={hero.ctaPrimary.href}
              whileHover={reduced ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex items-center gap-2 chrome-pill text-on-accent rounded-full font-sans font-semibold px-6 h-12 min-h-[48px] shadow-[0_8px_28px_-8px_rgba(123,63,242,0.4)]"
            >
              {hero.ctaPrimary.text}
            </motion.a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 glass rounded-full font-sans font-medium px-5 h-12 min-h-[48px] text-ink hover:text-accent transition-colors"
            >
              {hero.ctaSecondary.text}
            </a>
          </motion.div>
        </div>

        {/* Specimen card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 glass rounded-3xl p-6 md:p-8 grid md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-3 flex items-center gap-3">
            <motion.div
              animate={reduced ? undefined : { rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full chrome-pill ring-2 ring-white/80"
            />
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-ink-muted uppercase">
                Specimen
              </div>
              <div className="font-serif italic text-xl text-ink">CB-04 / Bloom</div>
            </div>
          </div>
          <div className="md:col-span-9 grid grid-cols-3 gap-4">
            {[
              { k: "Year", v: "2026" },
              { k: "Format", v: "Studio" },
              { k: "Founded", v: "2021" },
              { k: "People", v: "Three" },
              { k: "Slots / yr", v: "Eight" },
              { k: "Reply within", v: "2 days" },
            ].map((f) => (
              <div key={f.k} className="border-t border-ink/15 pt-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  {f.k}
                </div>
                <div className="font-serif italic text-lg mt-1">{f.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden">
        <motion.div
          style={{ x: marqueeX }}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              {hero.marquee.map((m) => (
                <span
                  key={`${i}-${m}`}
                  className="inline-flex items-center gap-3 font-sans font-medium text-2xl md:text-3xl text-ink/70"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {m}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
