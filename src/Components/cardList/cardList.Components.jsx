import React from 'react';
import "./cardList.style.css"
import {Card} from "../Card/Card.Components"


export const CardList = (props)=>{
    return (
    <div className="card-list">
        {props.monsters.map(monster=> <Card Monster={monster} key={monster.id}/>)}
    </div>)
    
}