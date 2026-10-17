const variants = {
  primary: "bg-forest text-paper hover:bg-forest-dark",
  secondary: "border border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest/5",
  inverse: "bg-paper text-forest hover:bg-sage-light",
  outline: "border border-ink/15 bg-transparent text-ink hover:border-ink/40",
};

export default function Button({
  as: Component = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-[15px] font-semibold transition-colors duration-150 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
