import { useScrollReveal } from "../../hooks/useScrollReveal";
import ShowcaseArtwork from "../artwork/ShowcaseArtwork";
import FeatureSection from "../layout/FeatureSection";
import FeatureTextBlock from "../ui/FeatureTextBlock";

const SHOWCASE_COPY = {
  eyebrow: "Custom Profile",
  heading: "Showcase Your Talents",
  description:
    "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
};

function ShowcaseTalents() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <FeatureSection
      sectionRef={ref}
      isVisible={isVisible}
      titleId="showcase-talents-title"
      align="center"
      artworkVariant="artwork-scale--showcase"
      artwork={<ShowcaseArtwork />}
      textClassName="lg:h-[300px]"
      textBlock={
        <FeatureTextBlock
          eyebrow={SHOWCASE_COPY.eyebrow}
          heading={SHOWCASE_COPY.heading}
          description={SHOWCASE_COPY.description}
          headingId="showcase-talents-title"
          headingClassName="lg:h-[56px]"
          descriptionClassName="lg:h-[140px]"
        />
      }
    />
  );
}

export default ShowcaseTalents;
