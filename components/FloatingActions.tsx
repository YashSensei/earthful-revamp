export default function FloatingActions() {
  return (
    <>
      <button
        className="fixed left-4 bottom-4 z-30 bg-ink text-white rounded-full px-4 py-3 flex items-center gap-2 text-xs font-semibold shadow-lg hover:bg-black/85 transition"
        aria-label="Earn Rewards"
      >
        <span className="bg-earth-orange text-ink rounded-full w-6 h-6 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        </span>
        Earn Rewards
      </button>

      <a
        href="https://wa.me/919100000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 z-30 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 3.4A11 11 0 0 0 3.5 17l-1.4 5 5.1-1.3a11 11 0 0 0 5 1.3A11 11 0 0 0 20.5 3.4zm-8.3 17.1a9 9 0 0 1-4.6-1.2l-.3-.2-3 .8.8-3-.2-.3a9 9 0 1 1 7.3 3.9zm5.2-6.7c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2s-.8.9-1 1.1c-.2.2-.4.2-.7.1s-1.2-.4-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.6l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </>
  );
}
