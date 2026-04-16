import Link from "next/link";
import { Product, discountPct, formatRupee, maxCompare, minPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const price = minPrice(product);
  const compare = maxCompare(product);
  const pct = discountPct(product);
  const [img1, img2] = product.images;

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block bg-white rounded-[20px] overflow-hidden border border-black/5 hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square bg-earth-softCream overflow-hidden">
        {img1 && (
          <img
            src={img1}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
            loading="lazy"
          />
        )}
        {img2 && (
          <img
            src={img2}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        )}
        {pct && (
          <span className="absolute top-3 left-3 bg-earth-sale text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
            {pct}% OFF
          </span>
        )}
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-heading text-base md:text-[17px] leading-tight text-ink min-h-[44px]">
          {product.title}
        </h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-ink font-semibold">{formatRupee(price)}</span>
          {compare && compare > price && (
            <span className="text-earth-muted text-sm line-through">
              {formatRupee(compare)}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center gap-1 text-[12px] text-ink/70">
          <Stars /> <span className="ml-1">4.8 · verified reviews</span>
        </div>
        <button className="mt-4 w-full border border-ink text-ink text-xs tracking-widest font-semibold uppercase py-2.5 rounded-full hover:bg-ink hover:text-white transition-colors">
          Add to cart
        </button>
      </div>
    </Link>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFC573">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
        </svg>
      ))}
    </div>
  );
}
