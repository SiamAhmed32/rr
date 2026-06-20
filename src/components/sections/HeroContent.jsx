const HERO_COPY = {
  heading: "RemoteRecruit\u2019s Difference",
  description:
    "RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there\u2019s nothing but you, your talents, and the next step in your career.",
};

function HeroContent() {
  return (
    <div className="page-x mx-auto w-full max-w-[1040px] pb-20 pt-6 text-center sm:pb-24 sm:pt-10 md:pb-20 md:pt-20 lg:pb-24 lg:pt-[146px]">
      <h1 className="text-[26px] font-bold leading-[34px] text-white sm:text-[34px] sm:leading-[44px] md:text-[42px] md:leading-[52px] lg:text-[53px] lg:leading-[68px]">
        {HERO_COPY.heading}
      </h1>

      <p className="mx-auto mt-4 max-w-[800px] text-[15px] font-medium leading-[26px] text-white/80 sm:text-lg sm:leading-8 md:text-xl md:leading-8 lg:mt-4">
        {HERO_COPY.description}
      </p>
    </div>
  );
}

export default HeroContent;
