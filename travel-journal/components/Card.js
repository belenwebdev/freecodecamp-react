import React from "react"
import Card from "./Card"

export default function App(props){
    console.log(props)
    return (
        <div className="card d-flex flex-row">
            <img src={props.item.imageUrl} className="card-photo" />
            <div class="card-info">
                <p >
                    <i class="fa-solid fa-location-dot red"></i> 
                    <span className="location">{props.item.location} </span>
                    <a href={props.item.googleMapsUrl} target="_blank" class="grey">Visit on google maps</a>
                </p>
                <h1>{props.item.title}</h1>
                <h5>{props.item.startDate} - {props.item.endDate}</h5>
                <p>{props.item.description}</p>
                
            </div>
        </div>
    )
}