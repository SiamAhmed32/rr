function SectionHeading({ id, children, className = "" }) {
  return (
    <h2
      id={id}
      className={`mt-[26px] w-full max-w-[500px] text-[28px] font-medium leading-9 tracking-[0px] text-global-ink sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-[52px] ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
