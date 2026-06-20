import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Sign In", href: "#sign-in", variant: "link" },
  { label: "Sign Up", href: "#sign-up", variant: "button" },
];

function Navbar() {
  return (
    <header className="w-full pt-4 md:pt-6 lg:pt-[29px]">
      <nav
        aria-label="Main navigation"
        className="page-x mx-auto flex h-10 max-w-[1440px] items-center justify-between md:h-11 lg:h-[50px]"
      >
        <a href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <img
            src="/navbar/Logo.png"
            alt="RemoteRecruit"
            width={117}
            height={50}
            sizes="(max-width: 640px) 84px, (max-width: 1024px) 103px, 117px"
            className="h-9 w-[84px] object-contain sm:h-10 sm:w-[94px] md:h-11 md:w-[103px] lg:h-[50px] lg:w-[117px]"
            fetchPriority="high"
          />
        </a>

        <div className="flex shrink-0 items-center gap-4 md:gap-6 lg:gap-[30px]">
          {NAV_LINKS.map(({ label, href, variant }) => (
            <Button
              key={label}
              href={href}
              variant={variant === "button" ? "primary" : "link"}
            >
              {label}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
