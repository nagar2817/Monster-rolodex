import React from 'react';
import "./SearchBox.style.css"

export const Input = ({placeholder,handleChange})=>{
    return (
        <input className="input" type="search" placeholder={placeholder} onChange={handleChange}></input>
        
    );
}