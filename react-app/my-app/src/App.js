import './App.css';
import { useState } from 'react'
import Button from './button.js'
function App() {
  let [count, setCount] = useState(0)

  const addition = () => {
    setCount(++count)
  }
  // const subtraction = () => {
  //   setCount(--count)
  // }
  return (
    <div className="App">
      <div>Hello World</div>
      <p>You Clicked {count} times</p>
      <Button
        functionName={addition}
      />
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(count - 1)}>
        Minus
      </button>
    </div>
  );
}

export default App;
