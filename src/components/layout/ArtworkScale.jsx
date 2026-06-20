import LazyWhenVisible from "./LazyWhenVisible";

function ArtworkScale({ children, className = "", variant = "" }) {
  return (
    <div
      className={`artwork-scale mx-auto lg:mx-0 lg:shrink-0 ${variant} ${className}`}
    >
      <LazyWhenVisible minHeight={280}>
        <div className="artwork-scale-inner">{children}</div>
      </LazyWhenVisible>
    </div>
  );
}

export default ArtworkScale;
