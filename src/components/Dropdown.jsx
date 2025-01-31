import React from "react";
import { dateArray } from "../data/dateArray";
import "../App.css";
const Dropdown = ({ selectedDate, setSelectedDate }) => {
  return (
    <>
      <select
        className="dropdown"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        {dateArray.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
