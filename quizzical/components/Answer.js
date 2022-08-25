import React from "react";

export default function Answer(props){
    
    return(
        <div className={"answer "+(props.item.isSelected?'selected':'')} onClick={props.handleClick}>
            {props.decodeHtml(props.item.text)}
        </div>
    )
}