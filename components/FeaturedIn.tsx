const LOGOS = [
  { src: "https://earthful.me/cdn/shop/files/ET.webp?v=1767074119", alt: "Economic Times" },
  { src: "https://earthful.me/cdn/shop/files/Businessline.webp?v=1767074136", alt: "Business Line" },
  { src: "https://earthful.me/cdn/shop/files/Financial-express.webp?v=1767074147", alt: "Financial Express" },
  { src: "https://earthful.me/cdn/shop/files/DNA.webp?v=1767074158", alt: "DNA" },
  { src: "https://earthful.me/cdn/shop/files/Better_India.webp?v=1767074169", alt: "Better India" },
  { src: "https://earthful.me/cdn/shop/files/Your_story.webp?v=1767074190", alt: "Your Story" },
  { src: "https://earthful.me/cdn/shop/files/Inshorts.webp?v=1767074203", alt: "Inshorts" },
  { src: "https://earthful.me/cdn/shop/files/TOI.webp?v=1767074179", alt: "Times of India" },
  { src: "https://earthful.me/cdn/shop/files/INC_42.webp?v=1767074226", alt: "INC 42" },
];

export default function FeaturedIn() {
  const seq = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <section className="bg-cream">
      <div className="bg-earth-olive text-white mt-6">
        <div className="py-2 text-center tracking-[0.2em] text-sm font-medium">
          AS FEATURED IN
        </div>
      </div>

      <div className="overflow-hidden py-6 md:py-8">
        <ul className="flex items-center gap-10 md:gap-14 marquee-track whitespace-nowrap w-max">
          {seq.map((logo, i) => (
            <li
              key={i}
              className="flex items-center gap-10 md:gap-14 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 object-contain opacity-90"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-ink/50 inline-block" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
