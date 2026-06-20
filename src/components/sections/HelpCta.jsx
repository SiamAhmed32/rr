import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import GetStartedButton from "../ui/GetStartedButton";
import LazyWhenVisible from "../layout/LazyWhenVisible";

const HELP_COPY = {
  eyebrow: "Are you ready?",
  heading: "Help is only a few clicks away!",
  description:
    "Click Below to get set up super quickly and find help now!",
};

function HelpCtaDesktop() {
  return (
    <div className="relative mx-auto h-[610px] w-full max-w-[1440px]">
      <img
        src="/help/Mask Group.png"
        alt=""
        width={650}
        height={520}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute bottom-0 left-[50px] z-10 h-[520px] w-[650px]"
      />

      <img
        src="/help/Ellipse 49.png"
        alt=""
        width={53}
        height={53}
        loading="lazy"
        decoding="async"
        aria-hidden
        className="pointer-events-none absolute left-[263px] top-[31px] z-20 h-[53px] w-[53px]"
      />

      <img
        src="/help/Ellipse 51.png"
        alt=""
        width={29}
        height={29}
        loading="lazy"
        decoding="async"
        aria-hidden
        className="pointer-events-none absolute left-[1120px] top-[532px] z-20 h-[29px] w-[29px]"
      />

      <div className="absolute left-[762px] top-[141px] z-10 h-[339px] w-[390px]">
        <p className="text-base font-semibold leading-[30px] tracking-[1px] text-[#1E3E85]">
          {HELP_COPY.eyebrow}
        </p>

        <h2
          id="help-cta-title"
          className="absolute left-0 top-[70px] w-[390px] text-[44px] font-semibold leading-[57px] tracking-[0px] text-global-ink"
        >
          {HELP_COPY.heading}
        </h2>

        <p className="absolute left-0 top-[178px] w-[331px] text-lg font-normal leading-[33px] tracking-[0px] text-[#767784]">
          {HELP_COPY.description}
        </p>

        <GetStartedButton className="absolute left-0 top-[278px]" />
      </div>
    </div>
  );
}

function HelpCtaMobile() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative mx-auto w-full max-w-[650px]">
        <img
          src="/help/Ellipse 49.png"
          alt=""
          width={53}
          height={53}
          loading="lazy"
          decoding="async"
          aria-hidden
          className="pointer-events-none absolute left-[32%] top-0 z-20 h-[53px] w-[53px] -translate-y-1/2"
        />
        <img
          src="/help/Mask Group.png"
          alt=""
          width={650}
          height={520}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </div>

      <div className="w-full max-w-[390px]">
        <p className="text-base font-semibold leading-[30px] tracking-[1px] text-[#1E3E85]">
          {HELP_COPY.eyebrow}
        </p>

        <h2
          id="help-cta-title"
          className="mt-8 text-[28px] font-semibold leading-9 tracking-[0px] text-global-ink sm:mt-10 sm:text-[36px] sm:leading-[46px] md:text-[40px] md:leading-[52px]"
        >
          {HELP_COPY.heading}
        </h2>

        <p className="mt-6 max-w-[331px] text-lg font-normal leading-[33px] tracking-[0px] text-[#767784]">
          {HELP_COPY.description}
        </p>

        <GetStartedButton className="mt-[34px]" />
      </div>

      <img
        src="/help/Ellipse 51.png"
        alt=""
        width={29}
        height={29}
        loading="lazy"
        decoding="async"
        aria-hidden
        className="pointer-events-none h-[29px] w-[29px] self-end"
      />
    </div>
  );
}

function HelpCta() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <section
      ref={ref}
      aria-labelledby="help-cta-title"
      className="help-cta-bg relative mt-16 w-full overflow-hidden sm:mt-20 lg:mt-[100px] [content-visibility:auto] [contain-intrinsic-size:auto_640px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto hidden h-[610px] w-full max-w-[1440px] xl:block"
      >
        <div className="absolute left-[-85px] top-[-92px] h-[321px] w-[321px] rounded-full bg-white opacity-30" />
        <div className="absolute right-[-108px] top-[-138px] h-[380px] w-[380px] rounded-full bg-white opacity-30" />
        <div className="absolute left-[297px] top-[299px] h-[493px] w-[493px] rounded-full bg-white opacity-30" />
      </div>

      <div
        className={`reveal relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-8 md:px-12 xl:h-[610px] xl:px-0 xl:py-0 ${
          isVisible ? "reveal-visible" : ""
        }`}
      >
        <LazyWhenVisible minHeight={isDesktop ? 610 : 520}>
          {isDesktop ? <HelpCtaDesktop /> : <HelpCtaMobile />}
        </LazyWhenVisible>
      </div>
    </section>
  );
}

export default HelpCta;
