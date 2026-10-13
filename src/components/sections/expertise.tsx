import type { SiteContent } from "@/content/types";
import { Heading } from "../ui";

// Areas of focus: two-column list
export function Expertise({ data }: { data: SiteContent["expertise"] }) {
  const half = Math.ceil(data.items.length / 2);
  const cols = [data.items.slice(0, half), data.items.slice(half)];
  return (
    <section className="bg-canvas py-16 md:py-[9.17vw]">
      <div className="grid px-6 md:grid-cols-[21.67fr_4.5fr_25.4fr_4.45fr_25.4fr_9.73fr] md:pr-0 md:pl-[8.75vw]">
        <Heading text={data.title} className="t-h3 max-w-[312px] text-ink md:col-start-1" />
        {cols.map((col, i) => (
          <ul
            key={i}
            className={`divide-y divide-line ${i === 0 ? "mt-8 md:col-start-3 md:mt-0" : "border-t border-line md:col-start-5 md:border-t-0"}`}
          >
            {col.map((item) => (
              <li
                key={item}
                className="py-[21px] font-sans text-[13.5px] leading-[1.8] font-normal tracking-[0.1em] text-ink uppercase md:py-[25px] md:first:pt-[10px]"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
