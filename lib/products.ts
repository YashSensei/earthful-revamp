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
  "plant-protein",
  "bone",
  "multivitamin-18",
  "multivitamin-women-40-calcium-d3-k2",
  "honest-plant-protein-mango",
  "hair",
  "monksweet",
  "honest-plant-protein-assorted-pack",
  "honest-plant-protein-unflavoured-1",
];

export const PRODUCT_META: Record<
  string,
  { netLabel: string; reviews: number; score: number }
> = {
  womenmulti50: { netLabel: "Net Quantity: 60 Capsules", reviews: 4484, score: 4.87 },
  "plant-protein": { netLabel: "Net Weight: 504g", reviews: 1179, score: 4.79 },
  bone: { netLabel: "Net Quantity: 60 Capsules", reviews: 928, score: 4.83 },
  "multivitamin-18": { netLabel: "Net Quantity: 60 Capsules", reviews: 380, score: 4.83 },
  "multivitamin-women-40-calcium-d3-k2": {
    netLabel: "Net Quantity: 2 × 60 capsules",
    reviews: 786,
    score: 4.75,
  },
  "honest-plant-protein-mango": { netLabel: "Net Weight: 504g", reviews: 1179, score: 4.79 },
  hair: { netLabel: "Net Quantity: 30 Capsules", reviews: 331, score: 4.79 },
  monksweet: { netLabel: "Net Quantity: 33 grams", reviews: 21, score: 4.62 },
  "honest-plant-protein-assorted-pack": {
    netLabel: "Net Weight: 6 x 42g, 2 x 37g, 2 x 36g",
    reviews: 1179,
    score: 4.79,
  },
  "honest-plant-protein-unflavoured-1": {
    netLabel: "Net Weight: 504g",
    reviews: 1179,
    score: 4.79,
  },
  menmultivitamin: { netLabel: "Net Quantity: 60 Capsules", reviews: 420, score: 4.82 },
  "teens-multivitamin": { netLabel: "Net Quantity: 60 Capsules", reviews: 290, score: 4.78 },
  sleep: { netLabel: "Net Quantity: 60 Capsules", reviews: 214, score: 4.77 },
  skin: { netLabel: "Net Quantity: 60 Capsules", reviews: 182, score: 4.72 },
  "pcos-balance-inositol-chasteberry": {
    netLabel: "Net Quantity: 60 Capsules",
    reviews: 168,
    score: 4.8,
  },
  "earthful-marine-magnesium-powder": {
    netLabel: "Net Weight: 150g",
    reviews: 212,
    score: 4.74,
  },
  "complete-menopause-care-combo": {
    netLabel: "Net Quantity: 3 × 60 capsules",
    reviews: 94,
    score: 4.76,
  },
  "multivitamin-women-40-root-nourish-capsules": {
    netLabel: "Net Quantity: 60 + 30 capsules",
    reviews: 312,
    score: 4.78,
  },
  "multivitamin-women-40-marine-magnesium-powder": {
    netLabel: "Net Quantity: 60 capsules + 150g",
    reviews: 287,
    score: 4.76,
  },
  "honest-plant-protein-vanilla": { netLabel: "Net Weight: 504g", reviews: 542, score: 4.8 },
  "honest-plant-protein-japanese-matcha": { netLabel: "Net Weight: 504g", reviews: 318, score: 4.78 },
  "honest-plant-protein-coffee-mocha-1": { netLabel: "Net Weight: 504g", reviews: 412, score: 4.79 },
  "honest-plant-protein-berry-blast": { netLabel: "Net Weight: 504g", reviews: 221, score: 4.76 },
  "honest-plant-protein-apple": { netLabel: "Net Weight: 504g", reviews: 164, score: 4.74 },
  "kids-millet-mix": { netLabel: "Net Weight: 300g", reviews: 64, score: 4.7 },
  "multivitamin-women-40-calcium-d3-k2-1": {
    netLabel: "Net Quantity: 2 × 60 capsules",
    reviews: 786,
    score: 4.75,
  },
  menocool: { netLabel: "Net Quantity: 60 Capsules", reviews: 34, score: 4.65 },
  "myndlift-for-brain-fog": { netLabel: "Net Quantity: 60 Capsules", reviews: 28, score: 4.68 },
  "free-product": { netLabel: "1 Sachet", reviews: 0, score: 5.0 },
};

export function getMeta(handle: string) {
  return (
    PRODUCT_META[handle] || {
      netLabel: "Net Quantity: 60 Capsules",
      reviews: 100,
      score: 4.8,
    }
  );
}
