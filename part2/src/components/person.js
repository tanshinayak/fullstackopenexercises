import React from 'react'
const Person=({person})=>{
    return(
      <div>
        {person.map(person=>
        <p>{person.name} - {person.number}</p>)}
      </div>
    )
  }
  export default Person;