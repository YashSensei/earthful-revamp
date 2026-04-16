import Link from "next/link";

const SHOP = [
  { label: "Multivitamin", href: "/collections/multivitamin" },
  { label: "Plant Protein", href: "/collections/plant-protein" },
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
    <footer className="bg-earth-orange/60 text-ink">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <img
              src="https://earthful.me/cdn/shop/files/earthful_r_logo.png?v=1741355696&width=600"
              alt="Earthful"
              className="h-10 w-auto"
            />
            <div className="mt-5 flex gap-4">
              <SocialIcon kind="facebook" />
              <SocialIcon kind="instagram" />
              <SocialIcon kind="youtube" />
              <SocialIcon kind="pinterest" />
            </div>
            <p className="mt-6 text-sm font-semibold tracking-wide">
              FOR FEEDBACK/COMPLAINT CONTACT US AT
            </p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-ink/80">
              N square, 3-14, Masthan Nagar, Kavuri Hills,
              <br />
              Madhapur, Hyderabad
              <br />
              Telangana India 500033
            </address>
            <p className="mt-3 text-sm">
              <a href="tel:+918919138554" className="hover:underline">
                +91 89191 38554
              </a>
            </p>
            <p className="mt-1 text-sm">
              Email:{" "}
              <a href="mailto:care@earthful.me" className="hover:underline">
                care@earthful.me
              </a>
            </p>
          </div>

          <FooterColumn title="SHOP All" links={SHOP} />
          <FooterColumn title="ABOUT" links={ABOUT} />
          <FooterColumn title="QUICK LINKS" links={QUICK} />
        </div>

        <div className="mt-10 pt-6 border-t border-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink/70">
          <p>© {new Date().getFullYear()} Earthful. All rights reserved.</p>
          <p>HQ: Hyderabad, India</p>
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
    <div>
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

function SocialIcon({
  kind,
}: {
  kind: "facebook" | "instagram" | "youtube" | "pinterest";
}) {
  const paths: Record<string, React.ReactNode> = {
    facebook: (
      <path d="M13.5 21v-8h2.5l.4-3h-2.9V8.2c0-.9.3-1.4 1.6-1.4h1.5V4.1c-.3-.1-1.3-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V10H7.5v3H10v8h3.5z" />
    ),
    instagram: (
      <>
        <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </>
    ),
    youtube: (
      <path d="M22 8.5a3 3 0 00-2-2c-1.8-.5-10-.5-10-.5s-8.2 0-10 .5a3 3 0 00-2 2C-2 10.4-2 12-2 12s0 1.6.5 3.5a3 3 0 002 2c1.8.5 10 .5 10 .5s8.2 0 10-.5a3 3 0 002-2c.5-1.9.5-3.5.5-3.5s0-1.6-.5-3.5zM10 15V9l6 3-6 3z" transform="translate(2 0)"/>
    ),
    pinterest: (
      <path d="M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-.9 3.9-.3 1.1.6 2.1 1.7 2.1 2 0 3.6-2.2 3.6-5.3 0-2.8-2-4.7-4.8-4.7-3.2 0-5.2 2.4-5.2 5 0 1 .4 2 .9 2.6.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.4-.7-2.3-2.8-2.3-4.5 0-3.6 2.6-6.9 7.6-6.9 4 0 7.1 2.8 7.1 6.6 0 4-2.5 7.2-6 7.2-1.2 0-2.3-.6-2.7-1.3l-.7 2.9c-.3 1-1 2.4-1.5 3.2A10 10 0 1012 2z"/>
    ),
  };
  return (
    <a
      href="#"
      aria-label={kind}
      className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        {paths[kind]}
      </svg>
    </a>
  );
}
