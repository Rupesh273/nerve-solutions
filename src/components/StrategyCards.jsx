import React from "react";
import "../App.css";
import { BsCircleFill } from "react-icons/bs";

const StrategyCards = ({ strategies, selectedDate }) => {
  const str = [];
  const obj = {};
  strategies.map((strategy, index) => {
    const count = strategies.filter((s) => s === strategy).length;
    if (!obj[strategy]) {
      str.push({ strategy: strategy, count: count });
      obj[strategy] = count;
    }
  });
  return (
    <>
      <div className="strategy-cards">
        {str.length > 0 ? (
          str.map((strategy, index) => {
            return (
              <div key={index} className="card">
                <h3 className="strategy-name">{strategy.strategy}</h3>
                <p className="strategy-count">
                  <span className="strategy-icon">
                    <BsCircleFill />
                  </span>
                  {strategy.count}{" "}
                  {strategy.count > 1 ? "Strategies" : "Strategy"}
                </p>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            No strategies available for <br />
            <p style={{ color: "black" }}>{selectedDate}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default StrategyCards;
