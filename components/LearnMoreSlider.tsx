const CARDS = [
  {
    title: "Plant Protein",
    speaker: "Sudha, Co-founder",
    image:
      "https://earthful.me/cdn/shop/files/Dr1.webp?v=1767073526&width=3200",
  },
  {
    title: "Menopause Support",
    speaker: "Anjali, Celebrity Nutritionist",
    image:
      "https://earthful.me/cdn/shop/files/Dr2.webp?v=1767073540&width=3200",
  },
  {
    title: "Plant Protein",
    speaker: "Sudha, Co-Founder",
    image:
      "https://earthful.me/cdn/shop/files/Dr1.webp?v=1767073526&width=3200",
  },
  {
    title: "Multivitamin",
    speaker: "Veda, Co-founder",
    image:
      "https://earthful.me/cdn/shop/files/Dr2.webp?v=1767073540&width=3200",
  },
  {
    title: "Menopause",
    speaker: "Rachna, Fitness Enthusiast",
    image:
      "https://earthful.me/cdn/shop/files/Dr1.webp?v=1767073526&width=3200",
  },
  {
    title: "Plant Protein",
    speaker: "Saurabh, Earthful customer",
    image:
      "https://earthful.me/cdn/shop/files/Dr2.webp?v=1767073540&width=3200",
  },
];

export default function LearnMoreSlider() {
  return (
    <section className="bg-cream">
      <div className="container-page py-12 md:py-16">
        <h3 className="text-3xl md:text-5xl font-heading text-center mb-10">
          Learn More About Earthful
        </h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="relative w-[60vw] md:w-[260px] aspect-[3/4] flex-shrink-0 rounded-[22px] overflow-hidden snap-start group cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-heading leading-tight">
                  {c.title}
                </h3>
                <p className="mt-1 text-[12px] opacity-90">{c.speaker}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
