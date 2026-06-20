function GetStartedButton({ href = "#get-started", className = "" }) {
  return (
    <a
      href={href}
      className={`relative inline-block h-[61px] w-[180px] rounded-[30.5px] bg-[#52B4DA] transition-opacity hover:opacity-90 ${className}`}
    >
      <span className="absolute left-[8px] top-[8px] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white shadow-[0_2px_2px_rgba(0,0,0,0.18)]">
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          aria-hidden
          className="h-[15.45px] w-[22.53px]"
        >
          <path
            d="M1 8H21M21 8L14 1M21 8L14 15"
            stroke="#52B4DA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="absolute left-[65.5px] top-[17px] text-base font-medium leading-6 tracking-[0px] text-white">
        Get Started
      </span>
    </a>
  );
}

export default GetStartedButton;
