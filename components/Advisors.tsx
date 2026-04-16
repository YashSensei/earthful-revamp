const ADVISORS = [
  {
    name: "Dr. Surakshit Battina",
    role: "MD, Gynecology",
    image:
      "https://earthful.me/cdn/shop/files/Dr1.webp?v=1767073526&width=500",
  },
  {
    name: "Anjali Dange",
    role: "Chief Nutritionist",
    image:
      "https://earthful.me/cdn/shop/files/Dr2.webp?v=1767073540&width=500",
  },
];

export default function Advisors() {
  return (
    <section className="bg-cream">
      <div className="container-page py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-[42px] font-heading leading-tight">
          Our Scientific Advisors
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-ink/80">
          Our Scientific Advisors, doctors and nutritionists guide us with
          latest scientific approaches &amp; innovation. This ensures we deliver
          on our promise to you.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:gap-14 max-w-xl mx-auto">
          {ADVISORS.map((a) => (
            <div key={a.name} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-heading">
                {a.name}
              </h3>
              <p className="text-sm text-ink/70 mt-1">{a.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
