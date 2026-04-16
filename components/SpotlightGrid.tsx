import Link from "next/link";

const TILES = [
  {
    handle: "all",
    title: "Shop all",
    image:
      "https://earthful.me/cdn/shop/files/Shop_All_597395ca-6089-4cae-81fa-0b0dfc305503_1.webp?v=1760006368",
  },
  {
    handle: "menopause-support",
    title: "Menopause Support",
    image:
      "https://earthful.me/cdn/shop/files/Menopause_Support.webp?v=1767071107",
  },
  {
    handle: "plant-protein",
    title: "Protein",
    image: "https://earthful.me/cdn/shop/files/Protein.webp?v=1767071107",
  },
  {
    handle: "multivitamin",
    title: "Multivitamins",
    image:
      "https://earthful.me/cdn/shop/files/Multivitamins.webp?v=1767071107",
  },
  {
    handle: "sleep-stress-support",
    title: "Sugar Replacer & Stress Support",
    image:
      "https://earthful.me/cdn/shop/files/Sleep_Stress_Support.webp?v=1767071107",
  },
  {
    handle: "hair-skin-support",
    title: "Hair & Skin Support",
    image:
      "https://earthful.me/cdn/shop/files/Hair_Skin_Support.webp?v=1767071107",
  },
  {
    handle: "pcos-support",
    title: "PCOS Support",
    image:
      "https://earthful.me/cdn/shop/files/PCOS_Support.webp?v=1767071107",
  },
  {
    handle: "for-kids",
    title: "For Kids",
    image: "https://earthful.me/cdn/shop/files/For_Kids.webp?v=1767071107",
  },
  {
    handle: "combos",
    title: "Combos",
    image: "https://earthful.me/cdn/shop/files/Combos.webp?v=1767071107",
  },
];

export default function SpotlightGrid() {
  return (
    <section className="bg-cream">
      <div className="pt-3 pb-3 md:pt-4 md:pb-4 px-[50px]">
        <div className="flex gap-5 md:gap-14 lg:gap-[70px] overflow-x-auto no-scrollbar snap-x md:justify-center items-start">
          {TILES.map((t) => (
            <Link
              key={t.handle}
              href={`/collections/${t.handle}`}
              className="group flex-shrink-0 snap-start text-center"
              style={{ width: "94px" }}
            >
              <div
                className="overflow-hidden mx-auto bg-earth-orange/40"
                style={{
                  width: "70px",
                  height: "100px",
                  borderRadius: "9999px",
                }}
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 font-heading text-[14px] text-ink/75 leading-tight">
                {t.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
