const ADVISORS = [
  {
    name: "Dr. Surakshit Battina",
    role: "MD, Gynecology",
    image:
      "https://earthful.me/cdn/shop/files/1_c00a5622-e15a-439e-ac4a-771a085931da.png?v=1740577163&width=533",
  },
  {
    name: "Anjali Dange",
    role: "Chief Nutritionist",
    image:
      "https://earthful.me/cdn/shop/files/2_75adc304-72c2-4329-bd52-7d4ee04f8969.png?v=1740577163&width=533",
  },
];

export default function Advisors() {
  return (
    <section className="bg-cream">
      <div className="container-page py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-heading">
          Our Scientific Advisors
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-ink/80">
          Our Scientific Advisors, doctors and nutritionists guide us with
          latest scientific approaches &amp; innovation. This ensures we deliver
          on our promise to you.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-3xl mx-auto">
          {ADVISORS.map((a) => (
            <div key={a.name} className="flex flex-col items-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-earth-softCream">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl md:text-2xl font-heading">
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
