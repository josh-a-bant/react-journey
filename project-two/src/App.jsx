import './App.css'
import UserCard from "./components/UserCard";

import jashopic from './assets/myPic.jpg'

function App() {

  return (
    <div className="container">
      <UserCard name='Jashobant' desc='desc1' image={jashopic} style={{'border-radius':'20px', 'padding':'20px'}}/>
      <UserCard name='Jyoti' desc='desc2' image={jashopic} style={{'border-radius':'20px', 'padding':'20px'}}/>
      <UserCard name='Parth Aditi' desc='desc3' image={jashopic} style={{'border-radius':'20px', 'padding':'20px'}}/>
    </div>
  )
}

export default App
