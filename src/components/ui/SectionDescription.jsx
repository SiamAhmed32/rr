function SectionDescription({ children, className = "" }) {
  return (
    <p
      className={`mt-6 w-full max-w-[500px] text-base font-normal leading-7 tracking-[0px] text-global-copy sm:mt-8 lg:text-[19px] lg:leading-[35px] ${className}`}
    >
      {children}
    </p>
  );
}

export default SectionDescription;
