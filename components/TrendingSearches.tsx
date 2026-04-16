import Link from "next/link";
import type { ReactNode } from "react";

const TAGS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Hot flashes",
    href: "/collections/menopause-support",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.3 2s.8 2.6-1.1 5c-2.4 3-3.7 4.8-3.7 7.6A5.8 5.8 0 0 0 13.4 20c3.2.3 6-2 6.4-5.1.4-2.8-.9-4.9-2-6.5-.1 1-1 1.8-1.9 1.7-1.2-.1-1.8-1.3-1.5-2.4.4-1.5.5-3.6-2.1-5.7z" />
      </svg>
    ),
  },
  {
    label: "Plant protein",
    href: "/collections/plant-protein",
    icon: <CapsuleIcon />,
  },
  {
    label: "Vegan Calcium",
    href: "/products/bone",
    icon: <CapsuleIcon />,
  },
  {
    label: "Menopause Multivitamin",
    href: "/products/womenmulti50",
    icon: <CapsuleIcon />,
  },
  {
    label: "Magnesium",
    href: "/products/earthful-marine-magnesium-powder",
    icon: <CapsuleIcon />,
  },
];

function CapsuleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.5 3.5a5 5 0 0 0-5 5v7a5 5 0 0 0 10 0v-7a5 5 0 0 0-5-5zM3.5 12h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform="rotate(-35 10 12)"
      />
    </svg>
  );
}

export default function TrendingSearches() {
  return (
    <section className="bg-cream">
      <div className="container-page py-14 md:py-20">
        <h2 className="text-4xl md:text-[52px] font-heading text-center leading-tight">
          Trending Searches
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
          {TAGS.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/80 text-[15px] font-normal hover:bg-ink hover:text-white transition-colors"
            >
              <span className="shrink-0">{t.icon}</span>
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
