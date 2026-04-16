export type Collection = {
  handle: string;
  title: string;
  image: string;
  products: string[];
};

// Collections derived from earthful.me's navigation.
export const collections: Collection[] = [
  {
    handle: "all",
    title: "Shop All",
    image:
      "https://earthful.me/cdn/shop/files/Shop_All_597395ca-6089-4cae-81fa-0b0dfc305503_1.webp?v=1760006368",
    products: [],
  },
  {
    handle: "menopause-support",
    title: "Menopause Support",
    image:
      "https://earthful.me/cdn/shop/files/Menopause_Support.webp?v=1767071107",
    products: [
      "complete-menopause-care-combo",
      "womenmulti50",
      "menocool",
      "myndlift-for-brain-fog",
      "multivitamin-women-40-calcium-d3-k2",
      "multivitamin-women-40-marine-magnesium-powder",
      "multivitamin-women-40-root-nourish-capsules",
    ],
  },
  {
    handle: "plant-protein",
    title: "Plant Protein",
    image: "https://earthful.me/cdn/shop/files/Protein.webp?v=1767071107",
    products: [
      "plant-protein",
      "honest-plant-protein-vanilla",
      "honest-plant-protein-mango",
      "honest-plant-protein-japanese-matcha",
      "honest-plant-protein-coffee-mocha-1",
      "honest-plant-protein-berry-blast",
      "honest-plant-protein-unflavoured-1",
      "honest-plant-protein-apple",
      "honest-plant-protein-assorted-pack",
    ],
  },
  {
    handle: "multivitamin",
    title: "Multivitamins",
    image: "https://earthful.me/cdn/shop/files/Multivitamins.webp?v=1767071107",
    products: [
      "womenmulti50",
      "multivitamin-18",
      "menmultivitamin",
      "teens-multivitamin",
      "bone",
    ],
  },
  {
    handle: "sleep-stress-support",
    title: "Sleep & Stress Support",
    image:
      "https://earthful.me/cdn/shop/files/Sleep_Stress_Support.webp?v=1767071107",
    products: ["sleep", "myndlift-for-brain-fog"],
  },
  {
    handle: "hair-skin-support",
    title: "Hair & Skin Support",
    image:
      "https://earthful.me/cdn/shop/files/Hair_Skin_Support.webp?v=1767071107",
    products: ["hair", "skin"],
  },
  {
    handle: "pcos-support",
    title: "PCOS Support",
    image: "https://earthful.me/cdn/shop/files/PCOS_Support.webp?v=1767071107",
    products: ["pcos-balance-inositol-chasteberry"],
  },
  {
    handle: "for-kids",
    title: "For Kids",
    image: "https://earthful.me/cdn/shop/files/For_Kids.webp?v=1767071107",
    products: ["teens-multivitamin", "kids-millet-mix"],
  },
  {
    handle: "combos",
    title: "Combos",
    image: "https://earthful.me/cdn/shop/files/Combos.webp?v=1767071107",
    products: [
      "complete-menopause-care-combo",
      "multivitamin-women-40-calcium-d3-k2",
      "multivitamin-women-40-marine-magnesium-powder",
      "multivitamin-women-40-root-nourish-capsules",
      "honest-plant-protein-assorted-pack",
    ],
  },
];

export function getCollection(handle: string) {
  return collections.find((c) => c.handle === handle);
}
