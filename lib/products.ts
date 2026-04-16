import productsData from "@/data/products.json";

export type Variant = {
  id: number;
  title: string;
  price: number;
  compare_at_price: number | null;
  sku: string;
  available: boolean;
};

export type Product = {
  id: number;
  handle: string;
  title: string;
  vendor: string;
  product_type: string;
  tags: string[];
  images: string[];
  variants: Variant[];
  description: string;
};

export const products: Product[] = productsData as Product[];

export function getProduct(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function minPrice(p: Product): number {
  return Math.min(...p.variants.map((v) => v.price));
}

export function maxCompare(p: Product): number | null {
  const values = p.variants
    .map((v) => v.compare_at_price)
    .filter((v): v is number => !!v);
  return values.length ? Math.max(...values) : null;
}

export function discountPct(p: Product): number | null {
  const price = minPrice(p);
  const compare = maxCompare(p);
  if (!compare || compare <= price) return null;
  return Math.round(((compare - price) / compare) * 100);
}

export function formatRupee(n: number): string {
  return `₹ ${n.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

export const HOMEPAGE_BESTSELLERS = [
  "womenmulti50",
  "bone",
  "multivitamin-women-40-calcium-d3-k2",
  "earthful-marine-magnesium-powder",
  "complete-menopause-care-combo",
  "multivitamin-18",
  "menmultivitamin",
  "teens-multivitamin",
  "multivitamin-women-40-root-nourish-capsules",
  "multivitamin-women-40-marine-magnesium-powder",
  "plant-protein",
  "honest-plant-protein-vanilla",
  "honest-plant-protein-mango",
  "honest-plant-protein-japanese-matcha",
  "honest-plant-protein-coffee-mocha-1",
  "honest-plant-protein-unflavoured-1",
  "sleep",
  "hair",
  "pcos-balance-inositol-chasteberry",
  "skin",
  "monksweet",
];
