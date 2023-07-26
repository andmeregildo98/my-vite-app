import { useState } from 'react'
import './App.css'
import CardsPage from './components/CardsPage/CardsPage'
import Navbar from './components/commons/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 'none'}}>
      
      <div>
      <h1>Main</h1>
      </div>
      <CardsPage></CardsPage>
      {/* <InfoCard></InfoCard> */}      
      
    </div>
  )
}

export default App
