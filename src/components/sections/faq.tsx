import type { SiteContent } from "@/content/types";
import { Heading } from "../ui";

// FAQs: questions that open and close
export function Faq({ data }: { data: SiteContent["faq"] }) {
  return (
    <section id={data.id} className="bg-canvas py-16 md:py-[9.17vw]">
      <div className="grid px-6 md:grid-cols-[21.67fr_4.5fr_55.25fr_9.83fr] md:pr-0 md:pl-[8.75vw]">
        <Heading text={data.title} className="t-h3 max-w-[312px] text-ink" />
        <div className="mt-8 border-t border-line md:col-start-3 md:mt-0 md:border-t-0">
          {data.items.map((item, i) => (
            <details
              key={item.q}
              name="faq"
              open={i === 0}
              className="group border-b border-line [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-serif text-[21px] leading-[1.4] font-light text-ink transition-colors hover:text-accent-strong md:text-[23px]">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="relative mt-[0.55em] h-3 w-3 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-3 before:bg-current after:absolute after:top-0 after:left-1/2 after:h-3 after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="t-body max-w-[680px] pb-7 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
