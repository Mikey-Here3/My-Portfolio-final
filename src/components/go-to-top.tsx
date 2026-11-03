"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      aria-label="Go to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--navy)] shadow-[0_8px_28px_rgba(23,34,54,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--electric-blue)] hover:bg-[var(--electric-blue)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--electric-blue)] focus-visible:ring-offset-2 md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
}