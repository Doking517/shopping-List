import React from "react";
import './ScreensStyles.css'
import SubTitle from "../components/SubTitle";
import Image from "../components/Image";
import Button from "../components/Button";
import Title from "../components/Title";

export default function FirstPage({onClick}) {
  return (
    <div className="first-page"> 
      <Title text={"Your shopping List"} color={"#D2C2C2"} titleType={1}/>
      <div className="Bottom-section">
        <Image
          src={require("../assets/Rectangle8.png")}
          ali={"../Rectangle8.png"}
          height={"140px"}
          width={"146px"}
          scale={"95%"}
        />
        <SubTitle
          p1={"You have not added any shopping lists"}
          p2={"Tap the button below to create one now"}
          color={"#777676"}
          size={"16px"}
          align={"center"}
        />
        <Button text="Create" color={"#FFFF"} bgColor={"#43BCAE"} icon height={"41px"} width={"125px"} size={"1.1em"} onClick={onClick}/>
      </div>
    </div>
  );
}
