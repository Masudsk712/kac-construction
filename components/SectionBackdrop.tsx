/** Shared glow + grid for marketing sections (premium industrial look) */
export default function SectionBackdrop() {
  return (
    <>
      <div className="section-glow-wrap" aria-hidden>
        <div
          className="
            absolute top-[-180px] left-[-180px]
            w-[520px] h-[520px] rounded-full
            bg-cyan-500/8 dark:bg-cyan-500/10 blur-[140px]
          "
        />
        <div
          className="
            absolute bottom-[-180px] right-[-180px]
            w-[520px] h-[520px] rounded-full
            bg-blue-500/8 dark:bg-blue-500/10 blur-[140px]
          "
        />
      </div>
      <div className="section-grid-overlay" aria-hidden />
    </>
  );
}
