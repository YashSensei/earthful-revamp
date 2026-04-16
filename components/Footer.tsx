"use client";

import Link from "next/link";
import { useState } from "react";

const MULTIVITAMIN_SUB = [
  { label: "Women Multivitamin 40+", href: "/products/womenmulti50" },
  { label: "Women Multivitamin 18+", href: "/products/multivitamin-18" },
  { label: "Men Multivitamin", href: "/products/menmultivitamin" },
  { label: "Calcium + D3 + K2", href: "/products/bone" },
  { label: "Teens Multivitamin", href: "/products/teens-multivitamin" },
];

const PROTEIN_SUB = [
  { label: "Indonesian Cocoa", href: "/products/plant-protein" },
  { label: "Coffee Mocha", href: "/products/honest-plant-protein-coffee-mocha-1" },
  { label: "Japanese Matcha", href: "/products/honest-plant-protein-japanese-matcha" },
  { label: "Berry Blast", href: "/products/honest-plant-protein-berry-blast" },
  { label: "Unflavoured", href: "/products/honest-plant-protein-unflavoured-1" },
  { label: "Madagascar Vanilla", href: "/products/honest-plant-protein-vanilla" },
  { label: "Alphonso Mango", href: "/products/honest-plant-protein-mango" },
  { label: "Apple", href: "/products/honest-plant-protein-apple" },
  { label: "Assorted Pack", href: "/products/honest-plant-protein-assorted-pack" },
];

const SHOP_FLAT = [
  { label: "Kids Millet Mix", href: "/products/kids-millet-mix" },
  { label: "Zen Mode", href: "/products/sleep" },
  { label: "Root Nourish", href: "/products/hair" },
  { label: "HerSupport", href: "/products/pcos-balance-inositol-chasteberry" },
  { label: "Inner Glow", href: "/products/skin" },
  { label: "MonkSweet", href: "/products/monksweet" },
  { label: "Find your Supplement", href: "#" },
];

const ABOUT = [
  { label: "Our Journey", href: "#" },
  { label: "Blog", href: "#" },
  { label: "How to Use", href: "#" },
  { label: "Careers", href: "#" },
];

const QUICK = [
  { label: "FAQs", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Track Your Order", href: "#" },
  { label: "Return & Refund Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms And Conditions", href: "#" },
  { label: "Referral bonus", href: "#" },
  { label: "Loyalty Rewards", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFC773", color: "#404040" }}>
      <div className="container-page pt-10 md:pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-ink/25">
          {/* Column 1 — logo + socials + contact */}
          <div className="md:pr-8">
            <img
              src="https://earthful.me/cdn/shop/files/logo_new-022.webp?v=1766728405&width=400"
              alt="Earthful"
              className="h-8 w-auto"
              width={200}
              height={32}
            />
            <ul className="mt-5 flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/earthful.me/"
                  aria-label="Facebook"
                  className="block hover:opacity-70 transition"
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18 10.049C18 5.603 14.419 2 10 2s-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/earthful.me"
                  aria-label="Instagram"
                  className="block hover:opacity-70 transition"
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.4 2.4 0 0 0-.912.593 2.5 2.5 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23s.01 2.39.046 3.229c.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046s2.39-.01 3.23-.046c.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23s-.01-2.39-.055-3.229c-.027-.784-.164-1.204-.274-1.495a2.4 2.4 0 0 0-.593-.913 2.6 2.6 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045a63 63 0 0 1 3.302.045c.664.014 1.321.14 1.943.374a4 4 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.9 3.9 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.15 4.15 0 0 1-1.414-.922 4.1 4.1 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.4 4.4 0 0 1 .92-1.414 4.2 4.2 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805m1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93m5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC0Xz9EZDh8EOwGftAADvAJg"
                  aria-label="YouTube"
                  className="block hover:opacity-70 transition"
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18.16 5.87c.34 1.309.34 4.08.34 4.08s0 2.771-.34 4.08a2.13 2.13 0 0 1-1.53 1.53c-1.309.34-6.63.34-6.63.34s-5.321 0-6.63-.34a2.13 2.13 0 0 1-1.53-1.53c-.34-1.309-.34-4.08-.34-4.08s0-2.771.34-4.08a2.17 2.17 0 0 1 1.53-1.53C4.679 4 10 4 10 4s5.321 0 6.63.34a2.17 2.17 0 0 1 1.53 1.53M8.3 12.5l4.42-2.55L8.3 7.4z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/earthfulme/_created/"
                  aria-label="Pinterest"
                  className="block hover:opacity-70 transition"
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2.01a8.1 8.1 0 0 1 5.666 2.353 8.09 8.09 0 0 1 1.277 9.68A7.95 7.95 0 0 1 10 18.04a8.2 8.2 0 0 1-2.276-.307c.403-.653.672-1.24.816-1.729l.567-2.2c.134.27.393.5.768.702.384.192.768.297 1.19.297q1.254 0 2.248-.72a4.7 4.7 0 0 0 1.537-1.969c.37-.89.554-1.848.537-2.813 0-1.249-.48-2.315-1.43-3.227a5.06 5.06 0 0 0-3.65-1.374c-.893 0-1.729.154-2.478.461a5.02 5.02 0 0 0-3.236 4.552c0 .72.134 1.355.413 1.902.269.538.672.922 1.22 1.152.096.039.182.039.25 0 .066-.028.114-.096.143-.192l.173-.653c.048-.144.02-.288-.105-.432a2.26 2.26 0 0 1-.548-1.565 3.803 3.803 0 0 1 3.976-3.861c1.047 0 1.863.288 2.44.855.585.576.883 1.315.883 2.228a6.8 6.8 0 0 1-.317 2.122 3.8 3.8 0 0 1-.893 1.556c-.384.384-.836.576-1.345.576-.413 0-.749-.144-1.018-.451-.259-.307-.345-.672-.25-1.085q.22-.77.452-1.537l.173-.701c.057-.25.086-.451.086-.624 0-.346-.096-.634-.269-.855-.192-.22-.451-.336-.797-.336-.432 0-.797.192-1.085.595-.288.394-.442.893-.442 1.499.005.374.063.746.173 1.104l.058.144c-.576 2.478-.913 3.938-1.037 4.36-.116.528-.154 1.153-.125 1.863A8.07 8.07 0 0 1 2 10.03c0-2.208.778-4.11 2.343-5.666A7.72 7.72 0 0 1 10 2.001z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div className="mt-6 text-[13px] leading-relaxed space-y-2">
              <p className="font-semibold">FOR FEEDBACK/COMPLAINT CONTACT US AT</p>
              <p className="font-semibold">
                N square, 3-14, Masthan Nagar, Kavuri Hills, Madhapur, Hyderabad
                Telangana India 500033
              </p>
              <p>
                <strong>Ph: </strong>
                <a href="tel:+918919138554" className="hover:underline font-semibold">
                  +91 89191 38554
                </a>
              </p>
              <p>
                <strong>Email: </strong>
                <a href="mailto:care@earthful.me" className="hover:underline font-semibold">
                  care@earthful.me
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 — SHOP All */}
          <div className="md:px-8">
            <h2 className="text-sm tracking-widest font-semibold mb-5">SHOP All</h2>
            <ul className="space-y-3 text-sm">
              <ExpandableLinkGroup label="Multivitamin" href="/collections/multivitamin" items={MULTIVITAMIN_SUB} />
              <ExpandableLinkGroup label="Plant Protein" href="/collections/plant-protein" items={PROTEIN_SUB} />
              {SHOP_FLAT.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — ABOUT */}
          <FooterColumn title="ABOUT" links={ABOUT} />

          {/* Column 4 — QUICK LINKS */}
          <FooterColumn title="QUICK LINKS" links={QUICK} />
        </div>
      </div>

      {/* Bottom copyright strip */}
      <div className="border-t border-ink/25">
        <div className="container-page py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm">
          <span>© {new Date().getFullYear()}, Earthful</span>
          <span className="w-1 h-1 rounded-full bg-ink/50 hidden md:inline-block" />
          <Link href="#" className="hover:underline">
            © 2025, Refund policy
          </Link>
          <span className="w-1 h-1 rounded-full bg-ink/50 hidden md:inline-block" />
          <Link href="#" className="hover:underline">
            © 2025, Privacy policy
          </Link>
          <span className="w-1 h-1 rounded-full bg-ink/50 hidden md:inline-block" />
          <Link href="#" className="hover:underline">
            © 2025, Terms of service
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:px-8">
      <h2 className="text-sm tracking-widest font-semibold mb-5">{title}</h2>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExpandableLinkGroup({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center justify-between gap-2">
        <Link href={href} className="hover:underline">
          {label}
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Collapse" : "Expand"}
          className="p-1"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            style={{
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      {open && (
        <ul className="mt-2 ml-3 space-y-2 text-[13px] text-ink/80">
          {items.map((i) => (
            <li key={i.label}>
              <Link href={i.href} className="hover:underline">
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
