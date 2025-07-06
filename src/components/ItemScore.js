import React from "react";
import "./componentsStyle.css";

function ItemScore({ listCompleted, completedItem, itemsListLength }) {
  return (
    <div
      className="item-score-container"
      style={{
        border: ` ${
          listCompleted ? "#22A82F solid 6px" : "#464541 solid 6px"
        } `,
        color: `${listCompleted ? "#22A82F" : "#a0a0a0"}`,
      }}
    >
      <h2 className="item-score">
        {completedItem}/{itemsListLength}
      </h2>
    </div>
  );
}

export default ItemScore;
