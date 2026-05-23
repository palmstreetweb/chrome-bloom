"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Capabilities() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const s = content.services;

  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{s.eyebrow}</span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-ink-faint">
            HOVER A ROW
          </span>
        </div>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.95] tracking-tight max-w-[18ch]"
        >
          {s.heading}
        </motion.h2>

        <div className="mt-16 rounded-3xl overflow-hidden glass">
          {s.items.map((item, i) => (
            <motion.button
              key={item.number}
              onClick={() => setActive(i === active ? -1 : i)}
              onMouseEnter={() => setActive(i)}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group block w-full text-left border-t border-ink/15 first:border-t-0 px-6 md:px-10 py-8 hover:bg-white/40 transition-colors relative overflow-hidden"
              aria-expanded={active === i}
            >
              {/* Shimmer hover wash */}
              <motion.span
                aria-hidden
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-0 chrome-pill opacity-0"
                style={{ mixBlendMode: "soft-light" }}
              />
              <div className="relative grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 font-mono text-sm tracking-[0.2em] text-ink-muted">
                  {item.number}
                </div>
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif italic text-3xl md:text-4xl leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="mt-3 inline-block chrome-pill text-on-accent rounded-full font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 ring-1 ring-white/70">
                    {item.badge}
                  </span>
                </div>
                <p className="md:col-span-6 font-sans text-base leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: active === i ? "auto" : 0,
                  opacity: active === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:pl-[8.5%]">
                  {item.deliverables.map((d) => (
                    <li
                      key={d}
                      className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink bg-white/55 rounded-full px-3 py-2 backdrop-blur-sm border border-white/70 text-center"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
