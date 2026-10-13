"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";
import { Logo, PillLink } from "./ui";

// Header
export function Header({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // Close the menu on big screens so the page can scroll again
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-canvas focus:px-3 focus:py-2"
      >
        Skip to Content
      </a>
      <div className="px-edge flex h-[96px] items-center justify-between md:h-[115px]">
        <Link href="/" aria-label={`${content.brand.name} — home`}>
          <Logo brand={content.brand} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[clamp(18px,2.1vw,30px)] lg:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[13.27px] leading-[1.8] tracking-[0.1em] text-ink uppercase transition-colors hover:text-accent-strong"
            >
              {item.label}
            </Link>
          ))}
          <PillLink link={content.navCta} className="ml-2" />
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
        >
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Full-screen menu for phones */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-[120px] pb-12 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        inert={!open}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col items-center justify-center gap-6">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="font-serif text-[32px] font-light text-ink"
            >
              {item.label}
            </Link>
          ))}
          <PillLink link={content.navCta} onClick={close} className="mt-6" />
        </nav>
      </div>
    </header>
  );
}
