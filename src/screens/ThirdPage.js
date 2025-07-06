import React from "react";
import "./ScreensStyles.css";

import SubTitle from "../components/SubTitle";
import Image from "../components/Image";
import Button from "../components/Button";
import HeaderScore from "../components/HeaderScore";

function ThirdPage({ title, onAddItemButtonClick}) {
  return (
    <div className="thirdScreen-container">
      <HeaderScore
        align={"left"}
        color={"#D2C2C2"}
        size={"21px"}
        text1={title}
        completedItem={0} 
        itemsListLength={0}
      >
        <div className="image-empty">
          <Image
            src={require("../assets/Rectangle15.png")}
            height={"60%"}
            width={"70%"}
            scale={"130%"}
          />
        </div>
        <div className="bottom">
          <SubTitle
            size={"16px"}
            align={"center"}
            color={"#777676"}
            p1={"Your list is empty "}
            p2={"Click the button below to add an item now"}
          />
          <Button
            bgColor={"#43BCAE"}
            color={"#FFF"}
            icon
            text={"Add Item"}
            height={"41px"}
            width={"125px"}
            size={"1.1em"}
            onClick={onAddItemButtonClick}
          />
        </div>
      </HeaderScore>
    </div>
  );
}

export default ThirdPage;
