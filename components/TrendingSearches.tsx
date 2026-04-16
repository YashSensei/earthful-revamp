import Link from "next/link";

const TAGS = [
  {
    label: "Hot flashes",
    href: "/collections/menopause-support",
    icon: "https://earthful.me/cdn/shop/files/dd54008c5211ce992912f4e5d8ce9935a2358084.png?v=1754290882",
  },
  {
    label: "Plant protein",
    href: "/collections/plant-protein",
    icon: "https://earthful.me/cdn/shop/files/261b8b8e048b59d1037fdb5d929fd45515ff398a_2.png?v=1757942856",
  },
  {
    label: "Vegan Calcium",
    href: "/collections/multivitamin",
    icon: "https://earthful.me/cdn/shop/files/6674d10f7f05befbe14be9f17c7419a14b4721d4.png?v=1757942761",
  },
  {
    label: "Menopause Multivitamin",
    href: "/collections/menopause-support",
    icon: "https://earthful.me/cdn/shop/files/6674d10f7f05befbe14be9f17c7419a14b4721d4.png?v=1757942761",
  },
  {
    label: "Magnesium",
    href: "/collections/sleep-stress-support",
    icon: "https://earthful.me/cdn/shop/files/261b8b8e048b59d1037fdb5d929fd45515ff398a_2.png?v=1757942856",
  },
];

export default function TrendingSearches() {
  return (
    <section className="bg-cream">
      <div className="container-page py-8 md:py-12">
        <h2 className="text-3xl md:text-[40px] font-heading text-center leading-tight italic">
          Trending Searches
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {TAGS.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-ink/60 text-[15px] hover:bg-ink hover:text-white transition-colors"
            >
              <img src={t.icon} alt="" width="20" height="20" className="shrink-0" />
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
