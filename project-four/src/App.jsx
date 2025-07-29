
import { useState } from 'react'
import './App.css'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)

  function showCount() {
    setCount(count+1);
  }
  return (
    <div>
      <Count showCount={showCount}>
        <div >{count}</div>
        <button onClick={showCount}>
          Click Me
        </button>
      </Count>
    </div>
  )
}

export default App
