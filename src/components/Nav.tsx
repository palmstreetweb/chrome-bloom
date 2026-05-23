"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = previous;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0)",
          borderColor: scrolled ? "rgba(123,63,242,0.18)" : "rgba(123,63,242,0)",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "blur(0px)",
        }}
        transition={{ duration: 0.35 }}
        className="max-w-6xl mx-auto rounded-full border h-14 flex items-center justify-between pl-2 pr-2"
      >
        <a href="#top" className="flex items-center gap-2 pl-3">
          <span
            aria-hidden
            className="block w-7 h-7 rounded-full chrome-pill ring-2 ring-white/80 shadow-[0_2px_8px_rgba(123,63,242,0.35)]"
          />
          <span className="font-sans font-bold text-sm tracking-[0.16em]">{business.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-sans text-sm">
          {content.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full hover:bg-white/70 transition-colors text-ink"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <a
          href={content.nav.cta.href}
          className="hidden md:inline-flex items-center gap-1 bg-ink text-bg rounded-full font-sans font-medium text-sm px-5 h-11 hover:bg-accent transition-colors min-h-[44px]"
        >
          {content.nav.cta.name}
          <span aria-hidden>→</span>
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden h-11 px-5 rounded-full bg-ink text-bg font-sans font-medium text-sm min-h-[44px]"
        >
          Menu
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink text-bg flex flex-col"
          >
            <div aria-hidden className="absolute inset-0 orb-bg opacity-40 pointer-events-none" />
            <div className="relative px-6 pt-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/60">
                MENU / {business.name}
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-12 px-5 rounded-full bg-bg/15 text-bg backdrop-blur border border-bg/25 min-h-[48px]"
              >
                Close ×
              </button>
            </div>
            <div className="relative flex-1 flex flex-col justify-center px-6 gap-3">
              {content.nav.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.45 }}
                  className="font-serif text-5xl italic tracking-tight"
                >
                  {l.name}
                </motion.a>
              ))}
              <motion.a
                href={content.nav.cta.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 inline-flex items-center gap-2 chrome-pill text-on-accent rounded-full font-sans font-semibold px-6 h-14 self-start min-h-[48px]"
              >
                {content.nav.cta.name} →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
