import type { SiteContent } from "@/content/types";
import { Heading, Photo, PillLink, UnderlineLink } from "../ui";

// Our Office: new section (not in the original site)
export function Office({ data }: { data: SiteContent["office"] }) {
  const [main, detail] = data.images;
  return (
    <section
      id={data.id}
      aria-labelledby={`${data.id}-title`}
      className="bg-paper py-16 md:py-[8.1vw]"
    >
      <div className="grid md:grid-cols-[8.84fr_32.5fr_6.1fr_52.56fr] md:grid-rows-[auto_1fr]">
        {/* Text */}
        <div className="px-6 md:col-start-2 md:row-start-1 md:px-0">
          <p className="t-eyebrow text-ink">{data.eyebrow}</p>
          <Heading
            id={`${data.id}-title`}
            text={data.title}
            className="t-h2 mt-4 text-ink md:mt-[2.8vw]"
          />
          {data.paragraphs.map((p) => (
            <p key={p} className="t-body mt-5 text-ink-soft">
              {p}
            </p>
          ))}
        </div>

        {/* Two office photos; the small one overlaps the big one */}
        <div className="relative mt-12 mb-[18vw] ml-6 md:col-start-4 md:row-span-2 md:row-start-1 md:mt-0 md:mb-[9vw] md:ml-0 md:self-start">
          <Photo
            img={main}
            sizes="(min-width: 768px) 52vw, 94vw"
            className="aspect-[4/3] w-full"
          />
          <div className="absolute -bottom-[18vw] -left-6 w-[52%] border-[6px] border-paper bg-paper md:-bottom-[9vw] md:-left-[4.5vw] md:w-[38%] md:border-[10px]">
            <Photo img={detail} sizes="(min-width: 768px) 22vw, 50vw" className="aspect-[4/5]" />
          </div>
        </div>

        {/* Office details and buttons */}
        <div className="mt-10 px-6 md:col-start-2 md:row-start-2 md:mt-[3vw] md:px-0">
          <dl className="divide-y divide-line border-y border-line">
            {data.details.map((d) => (
              <div key={d.label} className="grid gap-1 py-4 sm:grid-cols-[120px_1fr] sm:gap-6 md:grid-cols-1 md:gap-1 lg:grid-cols-[120px_1fr] lg:gap-6">
                <dt className="t-eyebrow text-[12px] text-accent-strong">{d.label}</dt>
                <dd className="t-body text-[15px] leading-[1.7] text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <PillLink link={data.primaryCta} />
            <UnderlineLink link={data.secondaryCta} />
          </div>
        </div>
      </div>
    </section>
  );
}
