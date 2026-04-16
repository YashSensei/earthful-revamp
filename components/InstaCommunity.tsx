const GRID = [
  "https://earthful.me/cdn/shop/files/1_c00a5622-e15a-439e-ac4a-771a085931da.png?v=1740577163&width=533",
  "https://earthful.me/cdn/shop/files/Women18_webp_1.webp?v=1761851214&width=533",
  "https://earthful.me/cdn/shop/files/Mango_Protein_12_March_2.png?v=1773293114&width=533",
  "https://earthful.me/cdn/shop/files/Root_webp_5.webp?v=1761851506&width=533",
  "https://earthful.me/cdn/shop/files/Monkfruit_6.webp?v=1761850793&width=533",
  "https://earthful.me/cdn/shop/files/Cocoa_12_march_1.png?v=1773292816&width=533",
];

export default function InstaCommunity() {
  return (
    <section className="bg-cream">
      <div className="container-page py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-heading">
          Pledge to a Holistic Life!
        </h2>
        <p className="mt-3 text-sm md:text-base tracking-widest text-ink/70">
          JOIN OUR INSTA COMMUNITY AT{" "}
          <a
            href="https://www.instagram.com/earthful.me"
            className="underline font-medium"
          >
            @EARTHFUL.ME
          </a>
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
          {GRID.map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden bg-earth-softCream"
            >
              <img
                src={src}
                alt="Insta post"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
