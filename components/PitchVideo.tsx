export default function PitchVideo() {
  return (
    <section className="bg-cream">
      <div className="container-page py-10 md:py-16">
        <h2 className="text-4xl md:text-[52px] font-heading text-center mb-10">
          Our Pitch for Clean Nutrition
        </h2>
        <div className="relative overflow-hidden rounded-[28px] bg-black max-w-5xl mx-auto aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster="https://earthful.me/cdn/shop/files/23dee948f9584be4ba5a86d82a0e84fa.thumbnail.0000000000_1_ee8ac29f-ece2-4f26-9560-0bd17a6b80ca.webp?v=1767073461&width=1500"
          >
            <source
              src="https://earthful.me/cdn/shop/videos/c/vp/23dee948f9584be4ba5a86d82a0e84fa/23dee948f9584be4ba5a86d82a0e84fa.HD-1080p-2.5Mbps-49534667.mp4?v=0"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
