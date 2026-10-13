import Image from "next/image";
import Link from "next/link";
import { Fragment, type ElementType } from "react";
import type { Img, LinkItem, SiteContent } from "@/content/types";

// Turns {word} into a handwritten word and *text* into italic text
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\}|\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("{"))
          return (
            <span
              key={i}
              className="font-script text-[1.32em] leading-[0] font-normal tracking-normal text-accent"
            >
              {part.slice(1, -1)}
            </span>
          );
        if (part.startsWith("*"))
          return <em key={i} className="italic">{part.slice(1, -1)}</em>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export function Heading({
  as: Tag = "h2",
  text,
  className = "",
  id,
}: {
  as?: ElementType;
  text: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={className}>
      <Rich text={text} />
    </Tag>
  );
}

// Link that opens other websites in a new tab
export function SmartLink({
  link,
  className,
  onClick,
}: {
  link: LinkItem;
  className?: string;
  onClick?: () => void;
}) {
  const external = /^https?:\/\//.test(link.href);
  return (
    <Link
      href={link.href}
      aria-label={link.ariaLabel}
      className={className}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
    </Link>
  );
}

// Text link with a thin underline
export function UnderlineLink({ link, className = "" }: { link: LinkItem; className?: string }) {
  return (
    <SmartLink
      link={link}
      className={`t-button inline-block border-b border-ink/35 py-[9px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent-strong ${className}`}
    />
  );
}

// Oval outline button
export function PillLink({
  link,
  className = "",
  onClick,
}: {
  link: LinkItem;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <SmartLink
      link={link}
      onClick={onClick}
      className={`t-button inline-block rounded-[100%] border-[0.67px] border-ink px-[19.5px] py-[15px] whitespace-nowrap text-ink transition-colors duration-300 hover:bg-ink hover:text-paper ${className}`}
    />
  );
}

// Photo that fills its box and crops to fit
export function Photo({
  img,
  className = "",
  sizes,
  preload = false,
}: {
  img: Img;
  className?: string;
  sizes: string;
  // Load early (only for the top photo)
  preload?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        style={{ objectPosition: img.position ?? "center" }}
      />
    </div>
  );
}

// Text logo: name and small tagline
export function Logo({ brand }: { brand: SiteContent["brand"] }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-serif text-[28px] font-light tracking-[-0.01em] text-ink md:text-[36px]">
        {brand.name}
      </span>
      <span className="mt-1.5 pl-[2px] font-sans text-[9px] tracking-[0.34em] text-accent-strong uppercase md:text-[10.5px]">
        {brand.tagline}
      </span>
    </span>
  );
}
