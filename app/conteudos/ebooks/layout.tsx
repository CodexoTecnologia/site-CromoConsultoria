import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageTitle = "E-books";
const pageDescription =
  "Baixe e-books técnicos gratuitos sobre engenharia, viabilidade e proteção de inovação.";
const pageUrl = "https://www.cromoconsultoria.com.br/conteudos/ebooks";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Cromo Consultoria",
    images: [
      {
        url: "/assets/images/og-image-default.png",
        width: 1200,
        height: 628,
        alt: "Cromo Consultoria - E-books",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/images/og-image-default.png"],
  },
};

export default function EbooksLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}