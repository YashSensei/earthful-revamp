import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-cream">
      <Link href="/collections/all" className="block w-full">
        <picture>
          <source
            media="(min-width: 750px)"
            srcSet="https://earthful.me/cdn/shop/files/final_test_report_desktop_optimized_2.webp?v=1769174088&width=1780 1780w, https://earthful.me/cdn/shop/files/final_test_report_desktop_optimized_2.webp?v=1769174088&width=1500 1500w, https://earthful.me/cdn/shop/files/final_test_report_desktop_optimized_2.webp?v=1769174088&width=1100 1100w"
            sizes="100vw"
          />
          <img
            src="https://earthful.me/cdn/shop/files/final_test_report_mobile_optimized_2.webp?v=1769174088&width=750"
            alt="From Nature, Not Synthetic - Daily Nutrition"
            className="w-full h-auto block"
          />
        </picture>
      </Link>
    </section>
  );
}
