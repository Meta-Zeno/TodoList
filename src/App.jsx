import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, { text: inputValue, done: false }]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const toggleDone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].done = !updatedItems[index].done;
    setItems(updatedItems);
  };

  return (
    <>  
    
      <div className="container">
        <div className="inputWrap">
        <input className="typeBox"
          type="text"
          value={inputValue}
          placeholder="Type here"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="addItem" onClick={addItem}>+</button>
        </div>
        <ul>
        
          {items.map((item, index) => (
            <li key={index}>
              <input className="checkBox"
                type="checkbox"
                checked={item.done}
                onChange={() => toggleDone(index)}
              />
              <span
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.text}
              </span>
              <button className="removeItem" onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
