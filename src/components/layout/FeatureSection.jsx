import ArtworkScale from "./ArtworkScale";

function FeatureSection({
  sectionRef,
  isVisible,
  titleId,
  artwork,
  textBlock,
  reverse = false,
  align = "start",
  textClassName = "",
  artworkVariant = "",
}) {
  const alignClass =
    align === "center" ? "lg:items-center" : "lg:items-start";

  const textWrapper = (
    <div className={`w-full max-w-[500px] shrink-0 ${textClassName}`}>
      {textBlock}
    </div>
  );

  const artworkWrapper = (
    <div className="flex w-full justify-center lg:w-auto lg:block">
      <ArtworkScale variant={artworkVariant} className={reverse ? "" : "lg:ml-[116px]"}>
        {artwork}
      </ArtworkScale>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      className="bg-brand-white pb-16 md:pb-20 lg:overflow-hidden lg:pb-[100px] [content-visibility:auto] [contain-intrinsic-size:auto_520px]"
    >
      <div
        className={`reveal page-x mx-auto mt-16 flex w-full max-w-[1067px] flex-col items-center gap-10 text-center sm:mt-20 lg:mt-[100px] lg:min-h-[454px] lg:flex-row lg:gap-0 lg:text-left ${alignClass} ${
          isVisible ? "reveal-visible" : ""
        }`}
      >
        {reverse ? (
          <>
            {artworkWrapper}
            <div className="lg:ml-[116px]">{textWrapper}</div>
          </>
        ) : (
          <>
            {textWrapper}
            {artworkWrapper}
          </>
        )}
      </div>
    </section>
  );
}

export default FeatureSection;
