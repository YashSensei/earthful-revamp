import Link from "next/link";
import {
  Product,
  discountPct,
  formatRupee,
  getMeta,
  maxCompare,
  minPrice,
} from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const price = minPrice(product);
  const compare = maxCompare(product);
  const pct = discountPct(product);
  const meta = getMeta(product.handle);
  const [img1, img2] = product.images;

  return (
    <div className="group">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-earth-softCream">
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
          <div className="absolute top-2 left-2 w-[54px] bg-white/90 rounded-sm p-1 shadow-sm text-center leading-none">
            <span className="block text-[6px] font-black tracking-wider text-amber-500 uppercase">
              As Seen On
            </span>
            <span
              className="block text-[11px] font-black leading-[0.85] text-sky-500 uppercase"
              style={{ WebkitTextStroke: "0.3px white", paintOrder: "stroke fill" }}
            >
              Shark
              <br />
              Tank
            </span>
          </div>
          {pct && (
            <span className="absolute bottom-2 left-2 bg-earth-olive text-white text-[10px] font-semibold px-2 py-1">
              Sale
            </span>
          )}
        </div>

        <div className="mt-3">
          <h3 className="font-heading text-sm uppercase tracking-wide leading-snug min-h-[40px]">
            {product.title}
          </h3>
          <p className="mt-1 text-[13px] text-ink/60">{meta.netLabel}</p>
          <div className="mt-2 flex items-center gap-1 text-[13px] text-ink/70">
            <Stars />
            <span className="ml-1">{meta.reviews.toLocaleString()} reviews</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-semibold">{formatRupee(price)}</span>
            {compare && compare > price && (
              <span className="text-sm text-ink/50 line-through">
                {formatRupee(compare)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <button className="mt-3 w-full bg-earth-olive text-white text-xs tracking-widest font-semibold uppercase py-3 hover:bg-earth-oliveDark transition-colors">
        Add to cart
      </button>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC573">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
        </svg>
      ))}
    </div>
  );
}
