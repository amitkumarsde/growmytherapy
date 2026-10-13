import type { SiteContent } from "@/content/types";
import { Heading, Photo, UnderlineLink } from "../ui";

// My approach: text with a tall photo
export function Approach({ data }: { data: SiteContent["approach"] }) {
  return (
    <section id={data.id} className="bg-sand py-16 md:pt-[8.1vw] md:pb-[5.4vw]">
      <div className="grid px-6 md:grid-cols-[29.05fr_1.4fr_29.05fr_8.98fr_22.67fr] md:grid-rows-[auto_auto_auto_1fr] md:pr-0 md:pl-[8.75vw]">
        <p className="t-eyebrow text-ink md:col-span-3">{data.eyebrow}</p>
        <Heading
          text={data.title}
          className="t-h2 mt-4 text-ink md:col-span-3 md:row-start-2 md:mt-[8.6vw]"
        />
        <Photo
          img={data.image}
          sizes="(min-width: 768px) 23vw, 92vw"
          className="mt-10 aspect-[343/269] md:col-start-5 md:row-span-4 md:row-start-1 md:mt-0 md:aspect-[323/714] md:self-start"
        />
        <div className="mt-10 md:col-start-1 md:row-start-3 md:mt-[3.5vw]">
          <p className="t-lead text-ink">{data.lead}</p>
          {data.left.map((p) => (
            <p key={p} className="t-body mt-4 text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-4 md:col-start-3 md:row-start-3 md:mt-[3.5vw]">
          {data.right.map((p, i) => (
            <p key={p} className={`t-body text-ink-soft ${i ? "mt-4" : ""}`}>
              {p}
            </p>
          ))}
        </div>
        <div className="mt-8 md:col-span-3 md:row-start-4 md:mt-[3.4vw]">
          <UnderlineLink link={data.cta} />
        </div>
      </div>
    </section>
  );
}
