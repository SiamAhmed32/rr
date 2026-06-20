function PremiumTag() {
  return (
    <div
      className="absolute left-[7px] top-[-22px] z-10 flex h-11 w-[146px] items-center gap-1.5 rounded-[22px] bg-[#C2EEFF] pl-1"
      style={{ boxShadow: "0px 4px 4px 0px #4391C135" }}
    >
      <div className="relative h-9 w-9 shrink-0">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-white"
        />

        <img
          src="/One%20Click%20Asstes/Main%20Image.png"
          alt=""
          width={16}
          height={25}
          loading="lazy"
          decoding="async"
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[24.65px] w-[15.59px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-40 blur-[5.44px]"
        />

        <img
          src="/One%20Click%20Asstes/Main%20Image.png"
          alt=""
          width={16}
          height={25}
          loading="lazy"
          decoding="async"
          className="absolute left-1/2 top-1/2 h-[24.65px] w-[15.59px] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>

      <span className="text-base font-semibold leading-[15px] tracking-[0.4px] text-global-ink">
        Premium
      </span>
    </div>
  );
}

function PlanDetailSpot({ variant }) {
  if (variant === "premium") {
    return (
      <div className="relative h-[180px] w-[160px] shrink-0 overflow-visible rounded-2xl bg-[#ECF2FF]">
        <PremiumTag />

        <div className="flex h-full flex-col items-center justify-center pt-5 text-center">
          <p className="bg-linear-to-b from-[#5294DA] to-[#1E3E85] bg-clip-text text-[32px] font-semibold leading-[45px] text-transparent">
            $79.99
          </p>
          <p className="text-xl font-medium leading-[35px] text-global-ink">
            Per Month
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[180px] w-[160px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#ECF2FF] px-4 text-center">
      <p className="bg-linear-to-b from-[#5294DA] to-[#1E3E85] bg-clip-text text-[32px] font-semibold leading-[45px] text-transparent">
        Free
      </p>
      <p className="text-xl font-medium leading-[35px] text-global-ink">
        Basic
      </p>
    </div>
  );
}

export default PlanDetailSpot;
