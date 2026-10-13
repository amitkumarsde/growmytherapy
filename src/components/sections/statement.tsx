import type { SiteContent } from "@/content/types";
import { Heading, Photo } from "../ui";

// Statement: big photo with a short line
export function Statement({ data }: { data: SiteContent["statement"] }) {
  return (
    <section className="bg-canvas py-14 md:py-[6.6vw]">
      <div className="md:grid md:grid-cols-[53.4fr_4.49fr_36.98fr_5.12fr] md:items-end">
        <Photo
          img={data.image}
          sizes="(min-width: 768px) 53vw, 94vw"
          className="ml-6 aspect-[367/304] md:ml-0 md:aspect-[761/533]"
        />
        <Heading text={data.text} className="t-h2 mt-3 px-6 text-ink md:col-start-3 md:mt-0 md:px-0" />
      </div>
    </section>
  );
}
