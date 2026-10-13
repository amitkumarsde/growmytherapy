import type { SiteContent } from "@/content/types";
import { Heading, Photo, UnderlineLink } from "../ui";

// Hero: main heading and photos
export function Hero({ data }: { data: SiteContent["hero"] }) {
  return (
    <section className="bg-paper pb-14 md:pt-[2.7vw] md:pb-[5.35vw]">
      <div className="md:grid md:grid-cols-[34.53fr_8.28fr_44.56fr_4.56fr_8.07fr]">
        <div className="flex flex-col px-6 pt-8 md:col-start-3 md:row-start-1 md:px-0 md:pt-0">
          <p className="t-eyebrow max-w-[420px] text-ink">{data.eyebrow}</p>
          <div className="mt-6 md:mt-auto md:pt-10">
            <Heading as="h1" text={data.title} className="t-h1 text-ink" />
            <p className="t-body mt-5 max-w-[560px] text-ink-soft md:mt-6">{data.text}</p>
            <UnderlineLink link={data.cta} className="mt-6 md:mt-7" />
          </div>
        </div>

        <div className="mt-11 flex items-end justify-between md:contents">
          <Photo
            img={data.image}
            preload
            sizes="(min-width: 768px) 34vw, 72vw"
            className="aspect-[492/588] w-[71.3%] md:col-start-1 md:row-start-1 md:w-auto"
          />
          <Photo
            img={data.accentImage}
            sizes="(min-width: 768px) 8vw, 15vw"
            className="aspect-[57/199] w-[14.6%] md:col-start-5 md:row-start-1 md:aspect-[115/393] md:w-auto md:self-end"
          />
        </div>
      </div>
    </section>
  );
}
