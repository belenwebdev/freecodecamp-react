import React from "react"
import Game from "./components/Game"
import Start from "./components/Start"

export default function App () {
    
    const [started, setStarted] = React.useState(true);
    
    function startGame(){
        setStarted(true);
    }
    
    return (
        <div>
            {!started && <Start handleClick={startGame}/>}
            {started && <Game/>}
        </div>
    )
}