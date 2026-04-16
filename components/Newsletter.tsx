"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-earth-orange/70">
      <div className="container-page py-16 md:py-20 text-center">
        <p className="display tracking-widest text-xs md:text-sm mb-4">
          I WANT TO GET HEALTHIER
        </p>
        <h2 className="text-3xl md:text-5xl font-heading leading-tight max-w-2xl mx-auto">
          Get the latest health news in your inbox!
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/70 border border-ink px-5 py-3 rounded-full outline-none focus:bg-white placeholder:text-ink/50"
          />
          <button className="btn-primary rounded-full px-8">
            {sent ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
