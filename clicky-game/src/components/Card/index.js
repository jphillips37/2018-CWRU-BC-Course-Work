import React from "react"
import "./style.css"

const Card = props => (
    <div className="card" onClick = {() => props.shuffle(props.id)}>
        <img src={props.imageUrl} alt={props.name} points={Math.floor(Math.random()*10+1)}/>
        <p>{props.name}</p>
    </div>
    );

export default Card;