import { useState } from 'react'
import './App.css'
import CardsPage from './components/CardsPage/CardsPage'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 'none'}}>
      
      <div>
      <h1>Home</h1>
      </div>
      <CardsPage></CardsPage>
      {/* <InfoCard></InfoCard> */}
      { count >= 50 ? <div>Count: {count}</div> :  <div>{}</div> } 
      
      
    </div>
  )
}

export default App
