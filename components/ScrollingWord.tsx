"use client";

import { useEffect, useState } from "react";

const WORDS = ["Synthetic", "Artificial", "Harmful", "Unnecessary"];

export default function ScrollingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-earth-orange/60">
      <div className="container-page py-16 md:py-24 text-center">
        <p className="text-4xl md:text-7xl font-heading italic leading-[1.1]">
          <span className="text-5xl md:text-8xl align-top">“</span> We don&apos;t
          add anything
        </p>
        <p className="mt-6 text-4xl md:text-7xl font-heading">
          <span
            key={idx}
            className="inline-block min-w-[280px] md:min-w-[500px] border-b-2 border-ink pb-1 transition-opacity duration-300 animate-[fadein_400ms_ease-out]"
          >
            {WORDS[idx]}
          </span>
        </p>
        <style jsx>{`
          @keyframes fadein {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
