import React, { useState } from 'react'
import Person from './person'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const handleNewPerson=(event)=>{
      console.log(event.target.value)
      setNewName(event.target.value)
  }
  const addperson=(event)=>{
      event.preventDefault()
      const newPerson={
          name: newName
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson}/>
        </div>
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