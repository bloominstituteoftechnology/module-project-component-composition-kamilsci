import React from "react"
import Figure from "./Fig"


export default function Card({title, text, imageurl, date}) {
    return(
      <div className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <figure
        imageurl={imageurl}
        caption={date}
        />
  
      
      </div>
    )
  }