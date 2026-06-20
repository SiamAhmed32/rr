import { useScrollReveal } from "../../hooks/useScrollReveal";
import GlobalReachArtwork from "../artwork/GlobalReachArtwork";
import FeatureSection from "../layout/FeatureSection";
import FeatureTextBlock from "../ui/FeatureTextBlock";

const GLOBAL_REACH_COPY = {
  eyebrow: "Global Reach",
  heading: "The First Fully Global Job Board, Anywhere, Ever",
  description:
    "RemoteRecruit connects candidates with opportunities around the world. With today\u2019s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
};

function GlobalReach() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <FeatureSection
      sectionRef={ref}
      isVisible={isVisible}
      titleId="global-reach-title"
      artworkVariant="artwork-scale--global"
      artwork={<GlobalReachArtwork />}
      textClassName="lg:mt-[47px] lg:h-[387px]"
      textBlock={
        <FeatureTextBlock
          eyebrow={GLOBAL_REACH_COPY.eyebrow}
          heading={GLOBAL_REACH_COPY.heading}
          description={GLOBAL_REACH_COPY.description}
          headingId="global-reach-title"
          className="mt-[10px]"
          headingClassName="lg:h-[108px]"
          descriptionClassName="lg:h-[175px]"
        />
      }
    />
  );
}

export default GlobalReach;
