import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [msg, setMsg] = useState('')

  function displayMsg(e) {
    setMsg(e.target.value)
  }

  return (
   <div>
    <Button displayMsg={displayMsg} />
    <p>{msg}</p>
   </div>
  )
}

export default App
