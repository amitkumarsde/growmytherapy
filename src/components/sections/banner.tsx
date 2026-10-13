import type { SiteContent } from "@/content/types";
import { Photo, Rich } from "../ui";

// Banner: quote over a full-width photo
export function Banner({ data }: { data: SiteContent["banner"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-overlay">
      <div className="absolute inset-0 -z-20">
        <Photo img={data.image} sizes="100vw" className="h-full w-full" />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-overlay"
        style={{ opacity: "var(--overlay-opacity)" }}
        aria-hidden
      />
      <div className="px-6 py-[146px] md:px-[8.75vw] md:pt-[18.3vw] md:pb-[7.5vw]">
        <p className="t-h2 max-w-[850px] text-on-dark md:max-w-[59vw]">
          <Rich text={data.text} />
        </p>
      </div>
    </section>
  );
}
