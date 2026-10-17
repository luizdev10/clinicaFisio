export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  className = "",
}) {
  const titleTone = tone === "inverse" ? "text-paper" : "text-ink";
  const descTone = tone === "inverse" ? "text-paper/70" : "text-ink-soft";
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`flex max-w-[620px] flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-5 w-fit">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[clamp(30px,3.8vw,44px)] font-semibold leading-[1.1] tracking-[-0.01em] ${titleTone}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-[52ch] text-[17px] leading-relaxed ${descTone}`}>
          {description}
        </p>
      )}
    </div>
  );
}
