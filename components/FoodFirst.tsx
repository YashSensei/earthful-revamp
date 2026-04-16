import Link from "next/link";

export default function FoodFirst() {
  return (
    <section className="bg-cream">
      <div className="container-page py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-[28px] overflow-hidden bg-earth-olive/10">
            <img
              src="https://earthful.me/cdn/shop/files/earthful_content_banners_1_1_95d01db5-a4b6-42fd-98e3-6f2cee2e36c4.webp?v=1767073594&width=1500"
              alt="Food First"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:pl-6">
            <h2 className="display text-2xl md:text-4xl tracking-wider leading-tight">
              FOOD FIRST BUT FOOD ISN&apos;T ALL
            </h2>
            <p className="mt-6 text-sm md:text-base text-ink/80 max-w-lg leading-relaxed">
              Our impulsive food choices, stubborn eating habits and careless
              actions are deeply rooted problems. They shouldn&apos;t have the
              power to continue worsening our health. Bridge your nutrition
              gaps.
            </p>
            <Link
              href="/collections/multivitamin"
              className="btn-primary mt-8"
            >
              Explore Multivitamin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
