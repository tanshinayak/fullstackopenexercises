import React, { useState } from 'react'
import Person from './person'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number:'1234567890' } 
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const handleNewName=(event)=>{
      console.log(event.target.value)
      setNewName(event.target.value)
  }
  const handleNewNumber=(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
}
  const addperson=(event)=>{
      event.preventDefault()
      const newPerson={
          name: newName,
          number: newNumber
      }
      if(persons.indexOf(newPerson)===false)
      {setPersons(persons.concat(newPerson))
      setNewName('')}
      else 
      {
          alert(`${newName} is already added to phonebook`)
      }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Person key={persons.name} person={persons}/>
      </ul>
    </div>
  )
}

export default App