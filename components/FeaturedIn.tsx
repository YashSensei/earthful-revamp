const LOGOS = [
  "https://earthful.me/cdn/shop/files/ET.webp?v=1767074119",
  "https://earthful.me/cdn/shop/files/Businessline.webp?v=1767074136",
  "https://earthful.me/cdn/shop/files/Financial-express.webp?v=1767074147",
  "https://earthful.me/cdn/shop/files/DNA.webp?v=1767074158",
  "https://earthful.me/cdn/shop/files/Better_India.webp?v=1767074169",
  "https://earthful.me/cdn/shop/files/Your_story.webp?v=1767074190",
  "https://earthful.me/cdn/shop/files/Inshorts.webp?v=1767074203",
  "https://earthful.me/cdn/shop/files/TOI.webp?v=1767074179",
  "https://earthful.me/cdn/shop/files/INC_42.webp?v=1767074226",
];

export default function FeaturedIn() {
  const seq = [...LOGOS, ...LOGOS];
  return (
    <section className="bg-cream">
      <div className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-10">
          As featured in
        </h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-14 md:gap-20 items-center marquee-track whitespace-nowrap">
          {seq.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Featured logo"
              className="h-8 md:h-10 object-contain flex-shrink-0 opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
