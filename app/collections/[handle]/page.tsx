import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { collections, getCollection } from "@/lib/collections";
import { products, Product } from "@/lib/products";

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const col = getCollection(handle);
  if (!col) notFound();

  let items: Product[];
  if (handle === "all") {
    items = products.filter((p) => !p.tags.includes("free-product"));
  } else {
    items = col.products
      .map((h) => products.find((p) => p.handle === h))
      .filter((p): p is Product => !!p);
  }

  return (
    <div className="bg-cream">
      <div className="container-page py-10 md:py-14">
        <nav className="text-xs tracking-widest text-ink/60 mb-4">
          <a href="/">HOME</a> <span className="mx-2">/</span>
          <span>{col.title.toUpperCase()}</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-heading">{col.title}</h1>
        <p className="mt-3 text-sm text-ink/70">
          {items.length} product{items.length === 1 ? "" : "s"}
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
