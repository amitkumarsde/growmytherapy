import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { Logo, SmartLink } from "./ui";

// Footer
export function Footer({ content }: { content: SiteContent }) {
  const { footer } = content;
  return (
    <footer className="bg-canvas">
      <div className="px-edge grid gap-x-8 gap-y-10 pt-14 pb-12 md:grid-cols-3 md:pt-[4.5vw] md:pb-[4.5vw] lg:grid-cols-[29.2fr_8.2fr_15fr_18.8fr_19fr] lg:gap-x-0">
        <div className="md:col-span-3 lg:col-span-1">
          <Link href="/" aria-label={`${content.brand.name} — home`}>
            <Logo brand={content.brand} />
          </Link>
          <p className="t-body mt-8 max-w-[420px] text-[15px] text-ink-soft md:mt-[3.4vw]">
            {footer.blurb}
          </p>
        </div>
        {footer.columns.map((col, i) => (
          <div key={col.heading} className={i === 0 ? "lg:col-start-3" : ""}>
            <h2 className="t-eyebrow text-[13px] text-ink">{col.heading}</h2>
            <ul className="mt-4 space-y-1">
              {col.lines.map((line) => (
                <li
                  key={typeof line === "string" ? line : line.href + line.label}
                  className="font-sans text-[14px] leading-[1.75] font-light text-ink-soft"
                >
                  {typeof line === "string" ? (
                    line
                  ) : (
                    <SmartLink link={line} className="transition-colors hover:text-accent-strong" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {footer.note && (
        <p className="px-edge pb-6 font-sans text-[13px] leading-relaxed font-light text-ink-soft">
          {footer.note}
        </p>
      )}
      <div className="px-edge border-t border-line py-3">
        <p className="font-sans text-[13px] leading-[1.8] font-light text-ink-soft">{footer.copyright}</p>
      </div>
    </footer>
  );
}
