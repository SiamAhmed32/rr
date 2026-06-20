function PricingButton({ href = "#get-started", variant = "outline", className = "" }) {
  const styles =
    variant === "gradient"
      ? "border-0 bg-linear-to-br from-[#52B4DA] to-[#1E3E85] text-white shadow-[10px_0_50px_0px_rgba(49,89,211,0.28)] hover:opacity-95"
      : "border-2 border-faq-button-border bg-white text-[#1E3E85] hover:opacity-90";

  return (
    <a
      href={href}
      className={`flex h-[72px] w-full max-w-[436px] items-center justify-center rounded-3xl text-base font-semibold leading-[21px] transition-opacity ${styles} ${className}`}
    >
      Get Started
    </a>
  );
}

export default PricingButton;
