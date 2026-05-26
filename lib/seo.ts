// lib/seo.ts
import type { Metadata } from "next";
import { site } from "./site";

interface CreateMetadataInput {
  title: string;
  description?: string;
  path?: string;          // "/sobre", "/servicos/...", etc. Sem domínio.
  image?: string;         // path absoluto a partir de /public, ex: "/assets/images/og-sobre.png"
  imageAlt?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = site.description,
  path = "/",
  image = site.defaultOgImage,
  imageAlt = `${site.name} - ${title}`,
  noIndex = false,
}: CreateMetadataInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 628, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}