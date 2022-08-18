import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import placesData from "./data"

export default function App(){
    const cards = placesData.map(place => {
        return (<Card item={place}/>)
    })
    return (
        <div>
            <Navbar />
            <main>{cards}</main>
        </div>
    );
}