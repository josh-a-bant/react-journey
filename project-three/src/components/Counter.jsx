import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  

  return (
    <div className='counter-container'>
      <p>you clicked me {count} times</p>
      <button onClick={() => {setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter
