import React from "react";
import "../App.css";

const ToggleSlider = ({ selectedView, setSelectedView }) => {
  const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];
  return (
    <>
      <nav className="toggle-slider">
        {views.map((view) => (
          <button
            key={view}
            className={selectedView === view ? "active" : ""}
            onClick={() => setSelectedView(view)}
          >
            {view}
          </button>
        ))}
      </nav>
    </>
  );
};

export default ToggleSlider;
