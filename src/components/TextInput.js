import React from "react";
import './componentsStyle.css';

export default function TextInput({placeholder, onChange, value}){
    return(
        
            <input type="text" className="list-title-input" placeholder={placeholder} onChange={onChange} value={value}/>
        
    )
}