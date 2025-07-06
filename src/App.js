import React, { useState } from "react";
import "./index.css";

import Container from "./components/Container";

import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import ThirdPage from "./screens/ThirdPage";
import FourthPage from "./screens/FourthPage";

function App() {
  const [isFirstPageActive, setIsFirstPageActive] = useState(true);
  const [isSecondPageActive, setIsSecondPageActive] = useState(false);
  const [isThirdPageActive, setIsThirdPageActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [isFourthPageActive, setIsFourthPageActive] = useState(false);
  const [items, setItems] = useState([]);

  const secondPageActiveHandler = () => {
    setIsFirstPageActive(false);
    setIsSecondPageActive(true);
  };

  const addItemHandler = (item) => {
    setItems((items) => [...items, item]);
  };

  const cancelButtonHandler = () => {
    setIsSecondPageActive(false);
    setIsFirstPageActive(true);
  };

  const continueButtonHandler = () => {
    setIsSecondPageActive(false);
    setIsThirdPageActive(true);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const addButtonThirdPageHandler = () => {
    setIsThirdPageActive(false);
    setIsFourthPageActive(true);
  };

  return (
    <div className="App">
      <Container>
        {isFirstPageActive && (
          <FirstPage onClick={() => secondPageActiveHandler()} />
        )}
        {isSecondPageActive && (
          <SecondPage
            inputValue={inputValue}
            setInputValue={setInputValue}
            onClickCancel={() => cancelButtonHandler()}
            onClickContinue={() => continueButtonHandler()}
          />
        )}
        {isThirdPageActive && (
          <ThirdPage
            title={inputValue}
            itemsNumber={items}
            setItemsNumber={setItems}
            onAddItemButtonClick={() => addButtonThirdPageHandler()}
          />
        )}
        {isFourthPageActive && (
          <FourthPage
            title={inputValue}
            itemsNumber={items}
            setItemsNumber={setItems}
            onAddItem={addItemHandler}
            onToggleItems={handleToggleItem}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
