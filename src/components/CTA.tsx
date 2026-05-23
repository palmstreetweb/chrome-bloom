"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function CTA() {
  const reduced = useReducedMotion();
  const c = content.cta;

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full orb-bg opacity-80"
      />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{c.eyebrow}</span>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-serif italic text-[clamp(2.6rem,7vw,6rem)] leading-[1] tracking-tight"
        >
          {c.heading.split(" ").map((w, i, arr) => (
            <span
              key={i}
              className={i === arr.length - 2 || i === arr.length - 1 ? "chrome-text not-italic font-sans font-medium" : undefined}
            >
              {w}{" "}
            </span>
          ))}
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 font-sans text-lg leading-relaxed text-ink-muted max-w-[58ch] mx-auto"
        >
          {c.body}
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href={c.primary.href}
            whileHover={reduced ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-flex items-center gap-2 chrome-pill text-on-accent rounded-full font-sans font-semibold px-7 h-14 min-h-[48px] shadow-[0_10px_36px_-10px_rgba(123,63,242,0.4)]"
          >
            {c.primary.text}
          </motion.a>
          <a
            href={c.secondary.href}
            className="inline-flex items-center gap-2 glass rounded-full font-sans font-medium px-5 h-14 min-h-[48px]"
          >
            {c.secondary.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
