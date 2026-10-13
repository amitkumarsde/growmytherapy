import type { SiteContent } from "@/content/types";
import { Approach } from "./sections/approach";
import { Banner } from "./sections/banner";
import { Cta } from "./sections/cta";
import { Expertise } from "./sections/expertise";
import { Faq } from "./sections/faq";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./sections/hero";
import { Intro } from "./sections/intro";
import { Office } from "./sections/office";
import { Services } from "./sections/services";
import { Specialties } from "./sections/specialties";
import { Statement } from "./sections/statement";

export function HomePage({ content }: { content: SiteContent }) {
  return (
    <div className="bg-canvas text-ink">
      <Header content={content} />
      <main id="main">
        <Hero data={content.hero} />
        <Intro data={content.intro} />
        <Services data={content.services} />
        <Banner data={content.banner} />
        <Expertise data={content.expertise} />
        <Approach data={content.approach} />
        <Statement data={content.statement} />
        <Specialties data={content.specialties} />
        <Office data={content.office} />
        <Faq data={content.faq} />
        <Cta data={content.cta} />
      </main>
      <Footer content={content} />
    </div>
  );
}
