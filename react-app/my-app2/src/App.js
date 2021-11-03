
import './App.css';
import { useState } from 'react'
import Button from './button.js'

function App() {
  let [count, setCount] = useState(0)


  let buttonText = 'Addition'
  let buttonText2 = 'Subtraction'

  const Addtion = () => {
    setCount(++count)
  }
  const Subtraction = () => {
    setCount(--count)
  }

  return (
    <div className="App">
      {count}
      <Button
        functionName={Addtion}
        name={buttonText}
      />
      <Button
        functionName={Subtraction}
        name={buttonText2}
      />
    </div>
  );
}

export default App;
