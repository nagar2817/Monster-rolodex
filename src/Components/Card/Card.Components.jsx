import React from "react"
import "./Card.style.css"

export const Card = (props)=>{
    return (
        <div class="Card">
            <img alt="robo img" src={`https://robohash.org/${props.Monster.id}?set=set2&size=180x180`} ></img>
            <h1>{props.Monster.name}</h1>
            <p>{props.Monster.email}</p>
        </div>
    );
}
