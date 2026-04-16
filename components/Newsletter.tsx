"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-cream">
      <div className="container-page py-10 md:py-14 text-center">
        <h2 className="text-3xl md:text-[44px] font-heading leading-tight">
          I want to get healthier
        </h2>
        <p className="mt-3 text-[13px] md:text-sm tracking-[0.2em] text-ink/80 uppercase">
          Get the latest health news in your inbox!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-6 flex items-stretch max-w-md mx-auto border border-ink"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className="flex-1 bg-transparent px-4 py-3 outline-none text-sm placeholder:text-ink/60"
          />
          <button className="bg-transparent text-ink px-6 py-3 text-sm font-medium border-l border-ink hover:bg-ink hover:text-white transition">
            {sent ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
