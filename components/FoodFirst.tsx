import Link from "next/link";

export default function FoodFirst() {
  return (
    <section className="bg-cream">
      <div className="container-page py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image — square, no rounding, edge-to-edge within column */}
          <div className="aspect-square overflow-hidden">
            <img
              src="https://earthful.me/cdn/shop/files/earthful_content_banners_1_1_95d01db5-a4b6-42fd-98e3-6f2cee2e36c4.webp?v=1767073594&width=1500"
              alt="Women Multivitamin"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text — vertically centered */}
          <div className="flex flex-col justify-center px-6 py-10 md:px-14 md:py-16">
            <h2 className="font-heading text-2xl md:text-[36px] leading-tight">
              FOOD FIRST BUT FOOD ISN&apos;T ALL
            </h2>
            <p className="mt-5 text-sm md:text-[15px] text-ink/80 leading-relaxed max-w-md">
              Our impulsive food choices, stubborn eating habits and careless
              actions are deeply rooted problems. They shouldn&apos;t have the
              power to continue worsening our health. Bridge your nutrition gaps.
            </p>
            <div className="mt-8">
              <Link
                href="/collections/multivitamin"
                className="inline-flex items-center justify-center border border-ink text-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-ink hover:text-white transition-colors"
              >
                Explore Multivitamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
