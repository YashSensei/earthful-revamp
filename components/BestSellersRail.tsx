"use client";

import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { HOMEPAGE_BESTSELLERS, products } from "@/lib/products";

export default function BestSellersRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);

  const list = HOMEPAGE_BESTSELLERS.map((h) =>
    products.find((p) => p.handle === h)
  ).filter((p): p is NonNullable<typeof p> => !!p);

  function scroll(dir: number) {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth / 5;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    function onScroll() {
      if (!el) return;
      const cardWidth = el.scrollWidth / list.length;
      const idx = Math.round(el.scrollLeft / cardWidth) + 1;
      setCurrent(Math.min(Math.max(idx, 1), list.length));
    }
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [list.length]);

  return (
    <section className="bg-cream">
      <div className="container-page py-4 md:py-6">
        <h2 className="text-3xl md:text-[44px] font-heading text-center italic mb-6 md:mb-8">
          Featured Product
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
        >
          {list.map((p) => (
            <div
              key={p.handle}
              className="w-[240px] md:w-[calc((100%-5rem)/5)] flex-shrink-0 snap-start"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-ink/40 flex items-center justify-center hover:bg-ink hover:text-white transition disabled:opacity-40"
            disabled={current === 1}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-sm text-ink/70 tabular-nums">
            <span className="text-ink font-medium">{current}</span>
            <span className="mx-1">/</span>
            <span>{list.length}</span>
          </span>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-ink/40 flex items-center justify-center hover:bg-ink hover:text-white transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
