function Badge({ children, className = "" }) {
  return (
    <div
      className={`inline-flex h-9 items-center justify-center rounded-[18px] bg-global-badge px-4 ${className}`}
    >
      <span className="text-xs font-semibold leading-[15px] tracking-[0.4px] text-global-ink/80">
        {children}
      </span>
    </div>
  );
}

export default Badge;
