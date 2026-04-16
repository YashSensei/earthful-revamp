import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const related = products
    .filter(
      (p) =>
        p.handle !== product.handle &&
        (p.product_type === product.product_type ||
          p.tags.some((t) => product.tags.includes(t)))
    )
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} />
      {related.length > 0 && (
        <section className="bg-cream">
          <div className="container-page py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.handle} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
