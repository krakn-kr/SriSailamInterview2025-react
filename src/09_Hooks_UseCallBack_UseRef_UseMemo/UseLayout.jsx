import React, { useRef, useState } from "react";
import Tooltip from "./Tooltip";

const buttonLabels = [
  "Save",
  "Edit",
  "Delete",
  "Export",
  "Import",
  "Refresh",
  "Download",
  "Upload",
  "Share",
  "Print"
];

export default function UseLayout() {
  // Store refs and tooltip state for each button
  const buttonRefs = useRef(buttonLabels.map(() => React.createRef()));
  const [visibleIndex, setVisibleIndex] = useState(null);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 50 }}>
      {buttonLabels.map((label, idx) => (
        <div key={label} style={{ position: "relative" }}>
          <button
            ref={buttonRefs.current[idx]}
            style={{ fontSize: 16, padding: "10px 24px" }}
            onMouseEnter={() => setVisibleIndex(idx)}
            onMouseLeave={() => setVisibleIndex(null)}
            onFocus={() => setVisibleIndex(idx)}
            onBlur={() => setVisibleIndex(null)}
          >
            {label}
          </button>
          <Tooltip
            targetRef={buttonRefs.current[idx]}
            visible={visibleIndex === idx}
          >
            Tooltip for <b>{label}</b>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
