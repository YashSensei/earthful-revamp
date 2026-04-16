export default function FooterBanner() {
  return (
    <section className="bg-cream block">
      <div
        className="w-full overflow-hidden bg-cream"
        style={{ height: "clamp(200px, 28vw, 400px)" }}
      >
        <img
          src="https://earthful.me/cdn/shop/files/website_fotter_image.webp?v=1761853165"
          alt=""
          aria-hidden
          width={1000}
          height={1000}
          loading="eager"
          className="w-full h-full object-cover object-top block"
        />
      </div>
    </section>
  );
}
