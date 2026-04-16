"use client";

import { useEffect, useState } from "react";

const WORDS = ["Synthetic", "Artificial", "Harmful", "Unnecessary"];

export default function ScrollingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-cream">
      <div className="container-page py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
          {/* Left — text */}
          <div className="md:pr-12">
            <span className="text-[80px] md:text-[120px] font-heading text-ink/15 leading-none select-none">
              &ldquo;
            </span>
            <h2 className="font-heading text-3xl md:text-[46px] leading-tight -mt-8 md:-mt-14">
              We don&rsquo;t add anything
            </h2>
            <p
              key={idx}
              className="mt-4 font-heading text-4xl md:text-[56px] text-earth-olive italic leading-tight animate-[fadeSlide_500ms_ease-out]"
            >
              {WORDS[idx]}
            </p>
          </div>

          {/* Right — product image */}
          <div>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="https://earthful.me/cdn/shop/files/Scrolling_word_Image_1_59f54aad-e271-48f3-8203-bb1fbc0fc1d8.webp?v=1767073509&width=750"
              />
              <img
                src="https://earthful.me/cdn/shop/files/Scrolling_word_Image_1_59f54aad-e271-48f3-8203-bb1fbc0fc1d8.webp?v=1767073509&width=750"
                alt="Earthful products — Calcium, Women Multivitamin 40+, Women Multivitamin 18+"
                className="w-full h-auto"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
