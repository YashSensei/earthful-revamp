"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "SHOP ALL", href: "/collections/all" },
  { label: "PLANT PROTEIN", href: "/collections/plant-protein" },
  { label: "MULTIVITAMINS", href: "/collections/multivitamin" },
  { label: "MENOPAUSE", href: "/collections/menopause-support" },
  { label: "PCOS", href: "/collections/pcos-support" },
  { label: "SLEEP & STRESS", href: "/collections/sleep-stress-support" },
  { label: "HAIR & SKIN", href: "/collections/hair-skin-support" },
  { label: "FOR KIDS", href: "/collections/for-kids" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream relative">
      {/* Vertical separator lines flanking centered logo (full header height) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-225px)] w-px bg-ink/25 pointer-events-none" />
      <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%+225px)] w-px bg-ink/25 pointer-events-none" />
      <div className="flex items-center justify-between py-3 px-5 md:px-[50px] relative">
        <button
          className="p-2 -ml-2 border-0 bg-transparent focus:outline-none"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Link href="/" className="flex items-center absolute left-1/2 -translate-x-1/2">
          <img
            src="https://earthful.me/cdn/shop/files/earthful_r_logo.png?v=1741355696&width=600"
            alt="Earthful"
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex items-center gap-1 md:gap-3">
          <button aria-label="Search" className="p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M21 21l-4.3-4.3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button aria-label="Rewards" className="p-2 hidden md:inline-flex">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFC573">
              <path
                d="M13 2L4.5 13.5h6.5l-1 8.5L19.5 10H13l1-8z"
                stroke="#121212"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button aria-label="Cart" className="p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 7h12l-1.5 12a2 2 0 01-2 1.8h-5a2 2 0 01-2-1.8L6 7z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 7V6a3 3 0 116 0v1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 left-0 bottom-0 w-[82%] max-w-[360px] bg-cream z-50 overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
              <span className="text-sm tracking-widest font-semibold">MENU</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="px-5 py-4 flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-[13px] tracking-widest font-medium py-3 border-b border-black/5"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
