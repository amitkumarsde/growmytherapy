import type { SiteContent } from "@/content/types";
import { Heading, Photo } from "../ui";

// About: bio with photo
export function Intro({ data }: { data: SiteContent["intro"] }) {
  return (
    <section id={data.id} className="bg-paper py-14 md:pt-[7vw] md:pb-[9.7vw]">
      <div className="grid gap-y-6 px-6 md:grid-cols-[25.19fr_1.47fr_25.19fr_8.98fr_30.25fr] md:grid-rows-[1fr_auto_auto] md:gap-y-0 md:pr-0 md:pl-[8.75vw]">
        <Heading
          text={data.title}
          className="t-h2 text-ink md:col-span-3 md:col-start-1 md:row-start-2 md:max-w-[690px]"
        />
        <div className="md:col-start-1 md:row-start-3 md:mt-[3.5vw]">
          <p className="t-lead text-ink">{data.lead}</p>
          <p className="t-body mt-4 text-ink-soft">{data.paragraphs[0]}</p>
        </div>
        <Photo
          img={data.image}
          sizes="(min-width: 768px) 30vw, 92vw"
          className="mt-5 aspect-[343/380] md:col-start-5 md:row-span-3 md:row-start-1 md:mt-0 md:aspect-[431/626]"
        />
        <p className="t-body mt-5 text-ink-soft md:col-start-3 md:row-start-3 md:mt-[3.5vw]">
          {data.paragraphs[1]}
        </p>
      </div>
    </section>
  );
}
