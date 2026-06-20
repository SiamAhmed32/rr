const MEMBERSHIP_FEATURES = [
  "Up to 25 active job posts",
  "Premium Placement & Visibility",
  "Messaging anyone, unlimited",
  "Unlimited invites",
  "View all applicants",
  "Unlimited invites to jobseekers",
];

function MembershipCard() {
  return (
    <div
      className="relative h-[483px] w-[451px] shrink-0"
      role="img"
      aria-label="Premium membership tier card with upcoming payment notification"
    >
      <img
        src="/membership/Ellipse 55.png"
        alt=""
        width={20}
        height={20}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[18px] top-[8px] h-5 w-5"
      />

      <div className="absolute left-[50px] top-[30px] h-[453px] w-[352px] rounded-[36.5px] border border-[#F6F4FF] bg-white shadow-[14px_10px_30px_0px_rgba(49,89,211,0.12)]">
        <div className="px-[34px] pt-[35px]">
          <p className="text-xs font-semibold leading-[18px] tracking-[1px] text-[#808191]">
            Your Membership Tier
          </p>

          <p className="mt-1 bg-linear-to-br from-brand-blue to-[#1E3E85] bg-clip-text text-xl font-semibold leading-6 tracking-[1.11px] text-transparent">
            Premium
          </p>

          <p className="mt-6 text-[10px] font-semibold uppercase leading-[15px] tracking-[1px] text-[#808191]">
            Features
          </p>

          <ul className="mt-3 space-y-2">
            {MEMBERSHIP_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <img
                  src="/membership/Active Icon.svg"
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-5 shrink-0"
                />
                <span className="text-sm font-normal leading-5 text-global-ink/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-[360px] top-[109px] flex h-[91px] w-[91px] items-center justify-center rounded-[45.5px] bg-linear-to-br from-[#52B4DA] to-[#1E3E85] shadow-[14px_41px_50px_0px_rgba(49,89,211,0.07)]"
      >
        <img
          src="/footer/RR%20Icon%20Logo.png"
          alt=""
          width={40}
          height={32}
          loading="lazy"
          decoding="async"
          className="h-8 w-10 object-contain"
        />
      </div>

      <div className="absolute left-0 top-[365px] flex h-[73px] w-[352px] items-center gap-4 rounded-[36.5px] border border-[#F6F4FF] bg-white px-4 shadow-[14px_10px_30px_0px_rgba(49,89,211,0.12)]">
        <div className="flex h-[61px] w-[61px] shrink-0 items-center justify-center rounded-[40px] bg-linear-to-br from-[#EBEDFF] to-[#ADB8FF]">
          <img
            src="/membership/paypal.png"
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="h-8 w-8 object-contain"
          />
        </div>

        <div>
          <p className="text-xs font-semibold leading-[21px] text-[#1E3E85]">
            Upcoming Payment in...
          </p>
          <p className="text-sm font-semibold leading-5 text-global-ink">
            14 Days - $79.99
          </p>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
