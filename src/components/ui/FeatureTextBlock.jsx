import Badge from "./Badge";
import SectionDescription from "./SectionDescription";
import SectionHeading from "./SectionHeading";

function FeatureTextBlock({
  eyebrow,
  heading,
  description,
  headingId,
  className = "",
  headingClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div className={`w-full max-w-[500px] ${className}`}>
      <Badge>{eyebrow}</Badge>
      <SectionHeading id={headingId} className={headingClassName}>
        {heading}
      </SectionHeading>
      <SectionDescription className={descriptionClassName}>
        {description}
      </SectionDescription>
    </div>
  );
}

export default FeatureTextBlock;
