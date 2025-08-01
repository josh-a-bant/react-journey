import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [text, setText] = useState('')



  return (
    <div>
      <p>inside parent components : {text}</p>
      <Card text={text} setText={setText}/>
    </div>
  )
}

export default App
