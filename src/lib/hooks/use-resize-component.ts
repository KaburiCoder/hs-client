import { useEffect, useRef, useState } from "react";

export const useResize = () => {
  const containerRef = useRef(null);
  const [rect, setRect] = useState<DOMRectReadOnly>();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const ddd: DOMRectReadOnly = entry.contentRect;
        setRect(entry.contentRect);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return { ref: containerRef, rect };
};
