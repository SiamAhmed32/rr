import { useEffect, useRef, useState } from "react";

function LazyWhenVisible({
  children,
  minHeight = 320,
  className = "",
  rootMargin = "0px",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}

export default LazyWhenVisible;
