import React from "react";
import "./ScreensStyles.css";
import SubTitle from "../components/SubTitle";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default function SecondPage({
  onClickCancel,
  onClickContinue,
  inputValue,
  setInputValue,
}) {
  return (
    <div className="second-page">
      <SubTitle
        color={"#B2B2B2"}
        p1={"Name your list"}
        size={"18px"}
        align={"left"}
      />
      <form className="shopping-list" onSubmit={(e) => e.preventDefault()}>
        <div>
          <TextInput
            placeholder={"Weekly Household Shopping..."}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="form-buttons">
          <Button
            bgColor={"#ABACAC"}
            text={"Cancel"}
            color={"#FFFFFF"}
            height={"41px"}
            width={"110px"}
            onClick={onClickCancel}
          />

          {inputValue && (
            <Button
              bgColor={"#43BCAE"}
              color={"#FFFFFF"}
              text={"Continue"}
              height={"41px"}
              width={"125px"}
              size={"1.1em"}
              onClick={onClickContinue}
            />
          )}
        </div>
      </form>
    </div>
  );
}
