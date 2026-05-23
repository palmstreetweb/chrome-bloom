"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], reduced ? ["100%", "100%"] : ["0%", "100%"]);

  const p = content.process;

  return (
    <section id="process" ref={ref} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{p.eyebrow}</span>
        </div>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.95] tracking-tight max-w-[22ch]"
        >
          {p.heading}
        </motion.h2>

        <div className="relative mt-16 pl-6 md:pl-10">
          {/* Scroll-linked line */}
          <div aria-hidden className="absolute left-0 top-0 bottom-0 w-px bg-ink/15" />
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px chrome-pill"
          />

          <div className="space-y-12">
            {p.steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={reduced ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-12 gap-6 items-baseline"
              >
                <div className="md:col-span-2 flex items-baseline gap-3">
                  <div className="relative -ml-12 mr-4">
                    <div className="w-6 h-6 rounded-full chrome-pill ring-2 ring-white shadow-[0_4px_18px_-4px_rgba(123,63,242,0.5)]" />
                  </div>
                  <span className="font-mono text-sm tracking-[0.2em] text-accent">
                    {s.number}
                  </span>
                </div>
                <h3 className="md:col-span-5 font-serif italic text-3xl md:text-4xl leading-tight">
                  {s.title}
                </h3>
                <div className="md:col-span-5 space-y-3">
                  <p className="font-sans text-base leading-relaxed text-ink-muted">{s.body}</p>
                  <div className="font-mono text-[11px] tracking-[0.16em] text-accent">
                    {s.artifact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
