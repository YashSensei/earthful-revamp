"use client";

import { useRef } from "react";
import Link from "next/link";

const SLIDES = [
  {
    title: "Plant Protein",
    href: "/collections/plant-protein",
    quote: "Clean nutrition for your bones",
    speaker: "Sudha, Co-founder",
    video:
      "https://earthful.me/cdn/shop/videos/c/vp/dc4ed58dc65a48ce95a399eb75dfcc29/dc4ed58dc65a48ce95a399eb75dfcc29.HD-1080p-7.2Mbps-41809671.mp4?v=0",
    poster:
      "https://earthful.me/cdn/shop/files/preview_images/dc4ed58dc65a48ce95a399eb75dfcc29.thumbnail.0000000000_small.jpg?v=1738237561",
  },
  {
    title: "Menopause Support",
    href: "/collections/menopause-support",
    quote: "Ease symptoms with Multivitamin",
    speaker: "Anjali, Celebrity Nutritionist",
    video:
      "https://earthful.me/cdn/shop/videos/c/vp/42de9313845b4439b4a03fbd754a1248/42de9313845b4439b4a03fbd754a1248.HD-1080p-7.2Mbps-41816601.mp4?v=0",
    poster:
      "https://earthful.me/cdn/shop/files/preview_images/42de9313845b4439b4a03fbd754a1248.thumbnail.0000000000_small.jpg?v=1738247034",
  },
  {
    title: "Plant Protein",
    href: "/collections/plant-protein",
    quote: "Simple, plant ingredients only",
    speaker: "Sudha, Co-Founder",
    video:
      "https://earthful.me/cdn/shop/videos/c/vp/2de56d83b8da4c6a8ba345f3237d6d80/2de56d83b8da4c6a8ba345f3237d6d80.HD-1080p-7.2Mbps-41815821.mp4?v=0",
    poster:
      "https://earthful.me/cdn/shop/files/preview_images/2de56d83b8da4c6a8ba345f3237d6d80.thumbnail.0000000000_small.jpg?v=1738246120",
  },
  {
    title: "Multivitamin",
    href: "/collections/multivitamin",
    quote: "Naturally manage overall health",
    speaker: "Veda, Co-founder",
    video:
      "https://earthful.me/cdn/shop/videos/c/vp/22c27849fe6d406abcbb42cb7f12006c/22c27849fe6d406abcbb42cb7f12006c.HD-1080p-7.2Mbps-41816268.mp4?v=0",
    poster:
      "https://earthful.me/cdn/shop/files/preview_images/22c27849fe6d406abcbb42cb7f12006c.thumbnail.0000000000_small.jpg?v=1738246625",
  },
  {
    title: "Menopause",
    href: "/collections/menopause-support",
    quote: "Ease Hot flashes & Knee pains",
    speaker: "Rachna, Fitness Enthusiast",
    video:
      "https://earthful.me/cdn/shop/videos/c/vp/1f3f4a561b884758a300cb965db1a64e/1f3f4a561b884758a300cb965db1a64e.HD-1080p-7.2Mbps-41816598.mp4?v=0",
    poster:
      "https://earthful.me/cdn/shop/files/preview_images/1f3f4a561b884758a300cb965db1a64e.thumbnail.0000000000_small.jpg?v=1738247034",
  },
  {
    title: "Plant Protein",
    href: "/collections/plant-protein",
    quote: "Choose Plant Protein",
    speaker: "Saurabh, Earthful customer",
    video:
      "https://earthful.me/cdn/shop/videos/c/vp/99e04c6ee1d04bb9989565d010bc0386/99e04c6ee1d04bb9989565d010bc0386.HD-1080p-7.2Mbps-41815823.mp4?v=0",
    poster:
      "https://earthful.me/cdn/shop/files/preview_images/99e04c6ee1d04bb9989565d010bc0386.thumbnail.0000000000_small.jpg?v=1738246095",
  },
];

export default function LearnMoreSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: number) {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir * (w / 3 + 20), behavior: "smooth" });
  }

  return (
    <section className="bg-cream">
      <div className="container-page py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 items-start">
          {/* Left column */}
          <div className="md:sticky md:top-32">
            <div className="flex items-center gap-1 text-sm text-ink/80">
              <Stars />
              <span className="ml-1">6000+ Verified 5-star reviews</span>
            </div>
            <h3 className="mt-3 text-3xl md:text-[38px] font-heading leading-tight">
              Learn More About Earthful
            </h3>
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full border border-ink/40 flex items-center justify-center hover:bg-ink hover:text-white transition"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full border border-ink/40 flex items-center justify-center hover:bg-ink hover:text-white transition"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right column — slider */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {SLIDES.map((s, i) => (
              <div key={i} className="w-[260px] md:w-[calc(33.333%-14px)] flex-shrink-0 snap-start">
                <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    poster={s.poster}
                  >
                    <source src={s.video} type="video/mp4" />
                  </video>
                </div>
                <Link href={s.href} className="block mt-3">
                  <h3 className="text-base font-heading underline">{s.title}</h3>
                </Link>
                <p className="mt-1 text-[22px] font-heading leading-none text-ink/50">&ldquo;</p>
                <p className="text-sm text-ink/80 leading-snug">{s.quote}</p>
                <p className="mt-1 text-sm text-ink/60">{s.speaker}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC573">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
        </svg>
      ))}
    </div>
  );
}
