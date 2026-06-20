const SOCIAL_ICONS = [
  { src: "/footer/Group%20119.png", label: "Facebook" },
  { src: "/footer/Group%20895.png", label: "Instagram" },
  { src: "/footer/Group%20894.png", label: "X" },
  { src: "/footer/Group%20119%20(1).png", label: "Twitter" },
  { src: "/footer/Group%20119%20(2).png", label: "LinkedIn" },
  { src: "/footer/Group%20896.png", label: "Snapchat" },
];

function Footer() {
  return (
    <footer className="relative left-1/2 z-10 w-screen max-w-none -translate-x-1/2 lg:z-0 lg:-mt-[205px]">
      <div className="relative bg-[#1E3E85] lg:bg-transparent">
        <img
          src="/footer/Background.png"
          alt=""
          width={1440}
          height={569}
          loading="lazy"
          decoding="async"
          aria-hidden
          className="hidden h-auto w-full lg:block"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-10 pb-12 sm:px-12 sm:py-12 sm:pb-14 lg:absolute lg:inset-0 lg:block lg:p-0">
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-between lg:absolute lg:inset-x-[200px] lg:top-[319px] lg:w-auto lg:flex-row lg:items-center lg:justify-between">
            <a href="/" className="shrink-0 transition-opacity hover:opacity-90">
              <img
                src="/navbar/Logo.png"
                alt="RemoteRecruit"
                width={184}
                height={74}
                loading="lazy"
                decoding="async"
                className="h-[56px] w-[140px] object-contain sm:h-[65px] sm:w-[160px] lg:h-[74px] lg:w-[184px]"
              />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end sm:gap-2.5 lg:gap-[10px]">
              {SOCIAL_ICONS.map(({ src, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            aria-hidden
            className="hidden h-px w-full max-w-[1040px] bg-[#8BA3CC]/50 lg:absolute lg:inset-x-[200px] lg:top-[493px] lg:block"
          />

          <div className="mt-6 flex justify-center sm:mt-8 lg:absolute lg:bottom-[20px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
