import ProductCard from "./ProductCard";
import { HOMEPAGE_BESTSELLERS, products } from "@/lib/products";

export default function BestSellersRail() {
  const list = HOMEPAGE_BESTSELLERS
    .map((h) => products.find((p) => p.handle === h))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <section className="bg-cream">
      <div className="container-page py-12 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-heading">
            Our Bestsellers
          </h2>
          <a
            href="/collections/all"
            className="hidden md:inline-block text-sm tracking-widest font-semibold uppercase hover:underline"
          >
            View all
          </a>
        </div>
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {list.map((p) => (
            <div
              key={p.handle}
              className="w-[72vw] sm:w-[46vw] md:w-[calc((100%-4rem)/4)] flex-shrink-0 snap-start"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
