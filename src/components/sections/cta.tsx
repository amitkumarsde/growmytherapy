import type { SiteContent } from "@/content/types";
import { Heading, Photo, PillLink } from "../ui";

// Book a session: last call to action
export function Cta({ data }: { data: SiteContent["cta"] }) {
  return (
    <section id={data.id} className="bg-paper py-14 md:pt-[6.6vw] md:pb-[9.3vw]">
      <div className="grid md:grid-cols-[11.86fr_8.28fr_36.98fr_8.35fr_34.53fr] md:grid-rows-[auto_1fr]">
        <Photo
          img={data.accentImage}
          sizes="(min-width: 768px) 12vw, 49vw"
          className="aspect-[189/199] w-[48.5%] md:col-start-1 md:row-start-2 md:aspect-[169/489] md:w-auto md:self-end"
        />
        <p className="t-eyebrow mt-11 px-6 text-ink md:col-start-3 md:row-start-1 md:mt-0 md:px-0">
          {data.eyebrow}
        </p>
        <div className="px-6 md:col-start-3 md:row-start-2 md:px-0 md:pt-[6.4vw]">
          <Heading text={data.title} className="t-h2 mt-3 text-ink md:mt-0" />
          {data.paragraphs.map((p, i) => (
            <p key={p} className={`t-body text-ink-soft ${i ? "mt-4" : "mt-5"}`}>
              {p}
            </p>
          ))}
          <PillLink link={data.button} className="mt-7" />
        </div>
        <Photo
          img={data.image}
          sizes="(min-width: 768px) 35vw, 83vw"
          className="mt-12 ml-auto aspect-[322/269] w-[82.6%] md:ml-0 md:col-start-5 md:row-span-2 md:row-start-1 md:mt-0 md:aspect-[492/606] md:w-auto md:self-start"
        />
      </div>
    </section>
  );
}
