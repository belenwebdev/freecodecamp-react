import React from "react"

export default function Start(props){
    
    return (
        <main className="new-game">
            <h1>Quizzical</h1>
            <p>Test your knowledge</p>
            <button className="btn" onClick={props.handleClick}>Start quiz</button>
        </main>
    )
}
