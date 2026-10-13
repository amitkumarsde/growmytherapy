import type { SiteContent } from "@/content/types";
import { Heading, Photo } from "../ui";

// Services: three cards
export function Services({ data }: { data: SiteContent["services"] }) {
  return (
    <section id={data.id} className="bg-canvas py-14 md:pt-[6.6vw] md:pb-[6.5vw]">
      <Heading text={data.title} className="t-h2 px-6 text-ink md:pl-[5vw]" />
      <div className="mt-10 grid gap-12 px-6 md:mt-[3.5vw] md:grid-cols-3 md:gap-[1.39vw] md:pr-[5.1vw] md:pl-[16.5vw]">
        {data.items.map((item) => (
          <article key={item.title}>
            <Photo
              img={item.image}
              sizes="(min-width: 768px) 25vw, 92vw"
              className="aspect-[343/304] md:aspect-[359/416]"
            />
            <h3 className="t-h4 mt-8 text-ink md:mt-[3.4vw]">{item.title}</h3>
            <p className="t-body mt-3 text-ink-soft">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
