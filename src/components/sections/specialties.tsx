import type { SiteContent } from "@/content/types";
import { Heading, UnderlineLink } from "../ui";

// Methods: four items in a grid
export function Specialties({ data }: { data: SiteContent["specialties"] }) {
  return (
    <section id={data.id} className="bg-canvas py-16 md:pt-[5.4vw] md:pb-[5.35vw]">
      <div className="grid gap-x-[4.45vw] px-6 md:grid-cols-2 md:pr-[6.04vw] md:pl-[8.75vw] lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        <Heading text={data.title} className="t-h3 max-w-[366px] text-ink md:col-span-2 lg:col-span-1 lg:row-span-2" />
        {data.items.map((item, i) => (
          <article
            key={item.title}
            className={`mt-12 flex flex-col ${i % 2 ? "lg:mt-[6.1vw]" : "lg:mt-[2.7vw]"}`}
          >
            <h3 className="t-h4 text-ink">{item.title}</h3>
            <p className="t-body mt-5 text-ink-soft">{item.text}</p>
            <div className="mt-auto pt-8">
              <UnderlineLink link={item.cta} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
