export default function AnnouncementBar() {
  return (
    <div className="bg-earth-olive text-white text-[13px] tracking-normal font-semibold">
      <div className="flex items-center justify-center gap-2 py-1.5 px-[50px]">
        <span>MRPs Reduced with GST Benefits - Check Now!</span>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
          <path
            d="M1 5h12m0 0L9 1m4 4L9 9"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
