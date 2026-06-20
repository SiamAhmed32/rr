const VARIANTS = {
  primary:
    "flex h-9 w-[76px] items-center justify-center rounded-xl bg-brand-blue text-xs font-semibold leading-[18px] tracking-[0.4px] text-brand-light transition-colors hover:bg-[#4aa8cc] sm:h-10 sm:w-[84px] sm:rounded-2xl sm:text-sm md:h-11 md:w-[88px] lg:h-[44px] lg:w-[92px] lg:rounded-2xl",
  link: "text-xs font-semibold leading-[18px] tracking-[0.4px] text-brand-light transition-opacity hover:opacity-80 sm:text-sm",
};

function Button({ href, children, variant = "primary", className = "" }) {
  return (
    <a href={href} className={`${VARIANTS[variant]} ${className}`.trim()}>
      {children}
    </a>
  );
}

export default Button;
