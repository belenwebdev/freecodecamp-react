import { useState } from 'react'
import Game from "./components/Game"
import Start from "./components/Start"
import './App.css'

function App() {

  const [started, setStarted] = useState(false);
    
  function startGame(){
      setStarted(true);
  }

  return (
    <div className="App">
      {!started && <Start handleClick={startGame}/>}
      {started && <Game/>}
    </div>
  )
}

export default App
