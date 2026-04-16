"use client";

import { useState } from "react";
import { Product, formatRupee } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [variantIdx, setVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const variant = product.variants[variantIdx];
  const compare = variant.compare_at_price;
  const pct =
    compare && compare > variant.price
      ? Math.round(((compare - variant.price) / compare) * 100)
      : null;

  return (
    <div className="bg-cream">
      <div className="container-page py-8 md:py-12">
        <nav className="text-xs tracking-widest text-ink/60 mb-6">
          <a href="/">HOME</a> <span className="mx-2">/</span>
          <a href="/collections/all">SHOP</a> <span className="mx-2">/</span>
          <span>{product.title.toUpperCase()}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex gap-4">
            <div className="hidden md:flex flex-col gap-2 w-20 max-h-[620px] overflow-y-auto no-scrollbar">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                    activeImg === i
                      ? "border-ink"
                      : "border-transparent hover:border-black/20"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 rounded-[24px] overflow-hidden bg-white aspect-square">
              <img
                src={product.images[activeImg]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:pl-6">
            <h1 className="text-3xl md:text-4xl font-heading leading-tight">
              {product.title}
            </h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-ink/70">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#FFC573"
                  >
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                  </svg>
                ))}
              </div>
              <span>4.8 · 1,200+ reviews</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-semibold">
                {formatRupee(variant.price)}
              </span>
              {compare && compare > variant.price && (
                <>
                  <span className="text-lg text-ink/50 line-through">
                    {formatRupee(compare)}
                  </span>
                  <span className="bg-earth-sale text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {pct}% OFF
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-ink/60 mt-1">MRP Incl. of all taxes</p>

            {product.description && (
              <p className="mt-6 text-sm md:text-base text-ink/80 leading-relaxed">
                {product.description}
              </p>
            )}

            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs tracking-widest font-semibold uppercase mb-3">
                  Choose Pack
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setVariantIdx(i)}
                      className={`px-5 py-3 rounded-full border text-sm font-medium transition ${
                        variantIdx === i
                          ? "border-ink bg-ink text-white"
                          : "border-ink/30 hover:border-ink"
                      }`}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center border border-ink rounded-full">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Decrease"
                >
                  –
                </button>
                <span className="w-8 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
              <button className="btn-primary flex-1 rounded-full">
                Add to Cart
              </button>
            </div>

            <button className="mt-3 w-full border-2 border-ink text-ink rounded-full py-3 text-sm font-semibold tracking-widest uppercase hover:bg-ink hover:text-white transition-colors">
              Buy Now
            </button>

            <ul className="mt-8 grid grid-cols-2 gap-4 text-xs text-ink/80">
              <li className="flex items-start gap-2">
                <span>🌱</span> 100% Plant-Based
              </li>
              <li className="flex items-start gap-2">
                <span>✔️</span> Clean-Label
              </li>
              <li className="flex items-start gap-2">
                <span>🧪</span> Lab Tested
              </li>
              <li className="flex items-start gap-2">
                <span>🚚</span> Free Shipping
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
