import PlanDetailSpot from "../ui/PlanDetailSpot";
import PricingButton from "../ui/PricingButton";
import PricingFeatureItem from "../ui/PricingFeatureItem";

const FREE_FEATURES = [
  { label: "1 Active Job", included: true },
  { label: "Basic List Placement", included: true },
  { label: "Unlimited Job Applicants", included: false },
  { label: "Invite Anyone to Apply to Your Jobs", included: false },
];

const PREMIUM_FEATURES = [
  { label: "Unlimited Job Posts", included: true },
  { label: "Instant Job Post Approval", included: true },
  { label: "Premium List Placement", included: true },
  { label: "Unlimited Job Applicants", included: true },
];

function PricingCard({ variant }) {
  const isPremium = variant === "premium";
  const features = isPremium ? PREMIUM_FEATURES : FREE_FEATURES;

  return (
    <article className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col overflow-visible rounded-3xl border border-[#ECEEF4] bg-white px-6 py-6 shadow-[0_10px_40px_rgba(49,89,211,0.06)] sm:px-8 sm:pt-8 sm:pb-8 lg:h-[343px]">
      <div className="flex flex-col gap-6 overflow-visible sm:flex-row sm:gap-5">
        <PlanDetailSpot variant={variant} />

        <ul className="flex w-full max-w-[256px] flex-col gap-5 lg:h-[156px] lg:justify-between">
          {features.map((feature) => (
            <PricingFeatureItem key={feature.label} {...feature} />
          ))}
        </ul>
      </div>

      <div className="mt-6 lg:mt-[27px]">
        <PricingButton variant={isPremium ? "gradient" : "outline"} />
      </div>
    </article>
  );
}

export default PricingCard;
