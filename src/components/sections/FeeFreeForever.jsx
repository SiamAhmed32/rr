import { useScrollReveal } from "../../hooks/useScrollReveal";
import MembershipCard from "../cards/MembershipCard";
import FeatureSection from "../layout/FeatureSection";
import FeatureTextBlock from "../ui/FeatureTextBlock";

const FEE_FREE_COPY = {
  eyebrow: "Actually Fee-Free",
  heading: "Fee-Free Forever",
  description:
    "We don\u2019t charge you fees and we don\u2019t put up paywalls. We\u2019re the bridge that connects job opportunities with the best candidates, with no middleman involved.",
};

function FeeFreeForever() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <FeatureSection
      sectionRef={ref}
      isVisible={isVisible}
      titleId="fee-free-title"
      reverse
      align="center"
      artworkVariant="artwork-scale--membership"
      artwork={<MembershipCard />}
      textClassName="lg:h-[300px]"
      textBlock={
        <FeatureTextBlock
          eyebrow={FEE_FREE_COPY.eyebrow}
          heading={FEE_FREE_COPY.heading}
          description={FEE_FREE_COPY.description}
          headingId="fee-free-title"
          headingClassName="lg:h-[52px]"
          descriptionClassName="lg:h-[140px]"
        />
      }
    />
  );
}

export default FeeFreeForever;
