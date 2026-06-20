import { useScrollReveal } from "../../hooks/useScrollReveal";
import PricingCard from "../cards/PricingCard";

function OneClickAway() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      aria-labelledby="one-click-away-title"
      className="relative z-10 overflow-visible px-0 pb-12 pt-10 md:pb-16 md:pt-12 lg:mt-[60px] lg:pb-0 lg:pt-0 [content-visibility:auto] [contain-intrinsic-size:auto_420px]"
    >
      <div
        className={`reveal page-x relative z-10 mx-auto w-full max-w-[1040px] ${
          isVisible ? "reveal-visible" : ""
        }`}
      >
        <h2
          id="one-click-away-title"
          className="text-center text-[28px] font-semibold leading-9 tracking-[0px] text-global-ink sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-[52px]"
        >
          Help Is One Click Away
        </h2>

        <div className="relative z-10 mt-10 flex w-full flex-col items-center gap-8 sm:mt-[60px] sm:gap-10 lg:flex-row lg:items-stretch lg:justify-between">
          <PricingCard variant="free" />
          <PricingCard variant="premium" />
        </div>
      </div>
    </section>
  );
}

export default OneClickAway;
