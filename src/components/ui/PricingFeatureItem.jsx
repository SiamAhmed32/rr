function PricingFeatureItem({ label, included }) {
  return (
    <li className="flex h-6 w-full max-w-[256px] items-center gap-3">
      <img
        src={
          included
            ? "/pricing/active-icon-included.svg"
            : "/pricing/active-icon-excluded.svg"
        }
        alt=""
        width={20}
        height={20}
        loading="lazy"
        decoding="async"
        className="h-5 w-5 shrink-0"
      />
      <span className="text-base font-medium leading-6 text-[#323445]">
        {label}
      </span>
    </li>
  );
}

export default PricingFeatureItem;
