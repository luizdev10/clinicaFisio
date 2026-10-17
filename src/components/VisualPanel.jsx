const tones = {
  forest: "bg-linear-to-br from-forest to-forest-dark",
  sage: "bg-linear-to-br from-sage-light to-paper",
  terracotta: "bg-linear-to-br from-terracotta/90 to-terracotta-dark",
};

const motifs = {
  arc: (
    <path d="M40 220 A140 140 0 0 1 220 50" strokeLinecap="round" />
  ),
  pulse: (
    <path d="M20 130 H90 L115 60 L150 200 L175 130 H260" strokeLinecap="round" strokeLinejoin="round" />
  ),
  leaf: (
    <path d="M60 220 C60 120 120 40 220 30 C210 130 150 210 60 220 Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function VisualPanel({
  tone = "sage",
  motif = "arc",
  className = "",
  children,
}) {
  const isDark = tone === "forest" || tone === "terracotta";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-ink/5 ${tones[tone]} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 280 280"
        className={`absolute inset-0 h-full w-full ${isDark ? "text-paper/15" : "text-forest/10"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      >
        {motifs[motif]}
      </svg>
      {children}
    </div>
  );
}
