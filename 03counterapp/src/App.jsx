import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter == 20) {
      return
    }
    else {
      // setCounter(counter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter == 0) {
      return
    }
    else {
      setCounter(counter - 1)
    }
  }

  const resetValue = () => {
    setCounter(counter = 0)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <button onClick={removeValue}>Removed Value</button>
      <div>
        <button onClick={resetValue}>Reset</button>
      </div>
    </>
  )
}

export default App
