import Navbar from "../layout/Navbar";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FFFFFE] bg-size-[100%_auto] bg-bottom bg-no-repeat md:min-h-[560px] lg:h-[704px] lg:min-h-[704px]"
      style={{ backgroundImage: "url(/hero/Background.svg)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 bg-[#1E3E85]"
        style={{ height: "max(0px, calc(100% - 48.89vw))" }}
      />

      <div className="relative z-10">
        <Navbar />
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
