import React, { useRef, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Tooltip({ children, targetRef, visible }) {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (!visible) return;
    const target = targetRef.current;
    const tooltip = tooltipRef.current;
    if (target && tooltip) {
      const targetRect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      // Try to show above; if not enough space, show below
      let top = targetRect.top - tooltipRect.height - 8;
      if (top < 0) {
        top = targetRect.bottom + 8;
      }
      setPosition({
        top,
        left: targetRect.left + (targetRect.width - tooltipRect.width) / 2,
      });
    }
  }, [visible, targetRef]);

  if (!visible) return null;

  return createPortal(
    <div
      ref={tooltipRef}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        background: "#333",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: 4,
        pointerEvents: "none",
        zIndex: 1000,
        fontSize: 14,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </div>,
    document.body
  );
}
