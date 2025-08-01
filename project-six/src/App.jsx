import { useState } from 'react'
import './App.css'
import LogOut from './components/LogOut'
import LogIn from './components/LogIn'

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false)

  // if (isLogedIn) {
  //   return <LogOut />
  // } else {
  //   return <LogIn />
  // }

  // return isLogedIn ? <LogOut /> : <LogIn />

  if(!isLogedIn) {
    return <LogIn />
  }

  return isLogedIn && <LogOut />
}

export default App
