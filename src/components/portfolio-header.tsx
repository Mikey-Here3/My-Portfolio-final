
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-[var(--page-gutter)]">
      <div className="mx-auto flex h-[78px] w-full max-w-[1600px] items-center gap-[clamp(1rem,3vw,3rem)] max-[760px]:h-[72px] max-[760px]:gap-2.5">
        <a
          href="#home"
          aria-label="Ashan Mir home"
          className="flex w-[76px] shrink-0 items-center max-[1100px]:w-[52px] max-[760px]:mr-auto max-[760px]:w-auto"
        >
          <span className="skew-x-[-8deg] text-[2rem] font-black tracking-[-0.12em] max-[760px]:text-[1.85rem]">
            AM
          </span>
        </a>

        <span className="h-[42px] w-px shrink-0 bg-[var(--border)] max-[760px]:hidden" />

        <nav
          aria-label="Main navigation"
          className="ml-2 flex items-center gap-[clamp(1rem,3vw,3rem)] max-[1100px]:gap-[1.2rem] max-[760px]:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-3 text-[0.9rem] transition-colors duration-200 hover:text-[var(--electric-blue)] ${
                link.href === "#home"
                  ? "text-[var(--electric-blue)] before:absolute before:bottom-0 before:left-[18px] before:size-2 before:rounded-full before:bg-[var(--electric-blue)] after:absolute after:bottom-[3px] after:left-0 after:h-0.5 after:w-[22px] after:bg-[var(--navy)]"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-auto flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--background)] py-[5px] pl-[23px] pr-1.5 text-[0.9rem] text-white shadow-[0_8px_20px_rgba(23,34,54,0.12)] max-[760px]:ml-0 max-[760px]:gap-[7px] max-[760px]:py-1 max-[760px]:pl-[13px] max-[760px]:pr-[5px] max-[760px]:text-[0.76rem] max-[760px]:whitespace-nowrap"
        >
          <span>Let&apos;s Connect</span>
          <span className="grid size-[38px] place-items-center rounded-full bg-[var(--electric-blue)] max-[760px]:size-[33px]">
            <ArrowUpRight size={20} />
          </span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden size-[42px] shrink-0 place-items-center rounded-full border border-[var(--border)] bg-white/70 text-[var(--navy)] max-[760px]:grid max-[390px]:size-[38px]"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="mx-auto block w-[min(calc(100%-2rem),440px)] rounded-[18px] border border-[var(--border)] bg-[#fbf7ef]/[0.97] px-[18px] py-2.5 shadow-[0_18px_40px_rgba(23,34,54,0.1)] backdrop-blur-xl min-[761px]:hidden"
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between py-3.5 text-[0.98rem] ${
                index !== links.length - 1
                  ? "border-b border-[var(--border)]"
                  : ""
              }`}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
