import React from 'react'
const Person=(props)=>{
    return(
      <div>
        {props.person.map(person=><p>{person.name} - {person.number} <button onClick={()=>props.delete(person)}>Delete</button></p> )}
      </div>
    )
  }
  export default Person;