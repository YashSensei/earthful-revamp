import Link from "next/link";

const COLUMNS = [
  {
    title: "SHOP ALL",
    links: [
      { label: "Multivitamins", href: "/collections/multivitamin" },
      { label: "Plant Protein", href: "/collections/plant-protein" },
      { label: "Menopause Support", href: "/collections/menopause-support" },
      { label: "PCOS Support", href: "/collections/pcos-support" },
      { label: "Sleep & Stress", href: "/collections/sleep-stress-support" },
      { label: "Hair & Skin", href: "/collections/hair-skin-support" },
      { label: "For Kids", href: "/collections/for-kids" },
      { label: "Combos", href: "/collections/combos" },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Our Process", href: "#" },
      { label: "Scientific Advisors", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-earth-olive text-white mt-12">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <img
              src="https://earthful.me/cdn/shop/files/earthful_r_logo.png?v=1741355696&width=600"
              alt="Earthful"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-sm opacity-90 leading-relaxed max-w-xs">
              Nature-based nutrition supplements where vitamins & minerals are
              sourced solely from plants.
            </p>
            <div className="mt-6 flex gap-3">
              {["instagram", "facebook", "youtube"].map((k) => (
                <a
                  key={k}
                  href="#"
                  aria-label={k}
                  className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-earth-olive transition"
                >
                  <span className="text-xs uppercase">{k[0]}</span>
                </a>
              ))}
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs tracking-widest font-semibold mb-5">
                {col.title}
              </h2>
              <ul className="space-y-3 text-sm opacity-90">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-80">
          <p>© {new Date().getFullYear()} Earthful. All rights reserved.</p>
          <p>HQ: Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
