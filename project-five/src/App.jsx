import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [text, setText] = useState('')

  

  return (
    <div>
      <input type="text" placeholder='type message' onChange={(e) => {setText(e.target.value)}}/>
      <Card text={text} />
      <Card text={text} />
    </div>
  )
}

export default App
