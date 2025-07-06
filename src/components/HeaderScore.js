import React from "react";
import "./componentsStyle.css";
import SubTitle from "./SubTitle";
import ItemScore from "./ItemScore";

export default function HeaderScore({
  color,
  size,
  text1,
  text2,
  align,
  itemsListLength,
  completedItem,
  completed,
  children,
}) {
  return (
    <div className="header-score-container">
      <div className="header-score">
        <SubTitle
          color={color}
          size={size}
          p1={text1}
          p2={text2}
          align={align}
        />
        <ItemScore
          itemsListLength={itemsListLength}
          completedItem={completedItem}
          listCompleted={completed}
        />
      </div>
      <div className="header-children">{children}</div>
    </div>
  );
}
