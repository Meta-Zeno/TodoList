import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !=='') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  }
  return (
    <>
    <div>
      <input 
      type="text" 
      value={inputValue}
      placeholder='Type here'
      onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>+</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
