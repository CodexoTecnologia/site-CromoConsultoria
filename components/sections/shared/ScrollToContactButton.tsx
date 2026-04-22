"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ScrollToContactButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function ScrollToContactButton({
  className,
  children,
}: ScrollToContactButtonProps) {
  const handleScrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const contactSection = document.getElementById("contato");
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#contato`,
    );
  };

  return (
    <Link href="#contato" onClick={handleScrollToContact} className={className}>
      {children}
    </Link>
  );
}