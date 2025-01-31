import { useState } from "react";

import "./App.css";
import StrategyCards from "./components/StrategyCards";
import Dropdown from "./components/Dropdown";
import ToggleSlider from "./components/ToggleSlider";
import { dateArray } from "./data/dateArray";
import { strategyArray } from "./data/strategyArray";

function App() {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const strategies =
    strategyArray.find((view) => view.View === selectedView)?.Value[
      selectedDate
    ] || [];
  console.log(strategies);
  return (
    <>
      <div className="container">
        <ToggleSlider
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
        <Dropdown
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <StrategyCards strategies={strategies} selectedDate={selectedDate} />
      </div>
    </>
  );
}

export default App;
