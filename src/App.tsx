import { useState } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = (currentValue: string) => {
    setInputValue(inputValue.concat(currentValue));
  };

  const clearButton = () => {
    setInputValue("");
  };

  const deleteButton = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInputValue(eval(inputValue).toFixed(2).toString());
    } catch (err) {
      setInputValue("Error");
      setTimeout(() => setInputValue(""), 1000);
    }
  };

  return (
    <>
      <div className="app">
        <div className="input">
          <input value={inputValue} readOnly type="text" />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => deleteButton()}>DEL</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => clearButton()}>CLR</button>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
