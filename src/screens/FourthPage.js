import React, { useState } from "react";
import HeaderScore from "../components/HeaderScore";
import TextInput from "../components/TextInput";
import "./ScreensStyles.css";
import Button from "../components/Button";
import ItemList from "../components/ItemList";
import Item from "../components/Item";

export default function FourthPage({
  itemsNumber,
  setItems,
  title,
  onAddItem,
  onToggleItems,
}) {
  const [name, setName] = useState("");
  const packedItems = itemsNumber.filter((item) => item.packed === true);
  const itemsCompleted =
    itemsNumber.length > 0
      ? `${packedItems.length === itemsNumber.length ? "completed" : ""}`
      : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, packed: false, id: Date.now() };
    onAddItem(newItem);

    setName("");
  };

  return (
    <div className="fourth-page-container" style={{ height: "inherit" }}>
      <HeaderScore
        color={"#D2C2C2"}
        text1={title}
        size={"22px"}
        align={"left"}
        completedItem={packedItems.length}
        itemsListLength={itemsNumber.length}
        completed={itemsCompleted}
      >
        <div
          style={{
            color: "#fff",
            width: "100%",
            height: "80%",
            backgroundColor: "#202020",
            padding: "2.2em 1em",
            borderRadius: "20px",
          }}
        >
          <form className="item-form" onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5em",
              }}
            >
              <TextInput
                placeholder={"item name..."}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />{" "}
              <Button
                bgColor={"#43BCAE"}
                color={"#FFF"}
                icon
                text={"Add Item"}
                height={"39px"}
                width={"120px"}
                size={".7em"}
                type={"submit"}
              />
            </div>
          </form>
          <div>
            <ItemList>
              {itemsNumber.map((item) => (
                <Item onToggleItems={onToggleItems} item={item} key={item.id} />
              ))}
            </ItemList>
          </div>
        </div>
      </HeaderScore>
    </div>
  );
}
