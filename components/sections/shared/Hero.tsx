import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  backLink?: {
    href: string;
    label: string;
  };
}

export default function Hero({
  imageSrc,
  imageAlt,
  label,
  title,
  titleHighlight,
  description,
  backLink,
}: HeroProps) {
  return (
    <section className="relative w-full h-[55vh] min-h-[380px] max-h-[560px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent" />

      <div className="relative h-full flex items-center pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          {backLink && (
            <Link
              href={backLink.href}
              className="flex items-center gap-2 text-zinc-400 hover:text-cromo text-xs font-bold uppercase tracking-wider transition-colors mb-8"
            >
              ← {backLink.label}
            </Link>
          )}
          <span className="text-cromo font-bold text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cromo" /> {label}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                  {titleHighlight}
                </span>
              </>
            )}
          </h1>
          {description && (
            <p className="text-zinc-300 text-base md:text-lg max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
