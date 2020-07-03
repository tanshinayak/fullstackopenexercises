import React, { useState } from 'react'
import Person from './person'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number:'1234567890' } 
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [search,setsearch]=useState("")
  const [filteredPersons,setfilteredPersons]=useState([])
  const handleNewName=(event)=>{
      setNewName(event.target.value)
  }
  const handleNewNumber=(event)=>{
    setNewNumber(event.target.value)
}
  const addperson=(event)=>{
      event.preventDefault()
      const newPerson={
          name: newName,
          number: newNumber
      }
      console.log(persons)
      if(persons.some(person=>person.name===newName))
      {alert(`${newName} is already added to phonebook`)
    }
      else 
      {
        setPersons(persons.concat(newPerson))
        setNewName('')
      setNewNumber('')
      }
  }
  const handleSearch=(event)=>{
   setsearch(event.target.value)
   setfilteredPersons(
    persons.filter((person) =>
      person.name.toLowerCase().startsWith(event.target.value.toLowerCase())
    )
  )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      Filter <input type="text" value={search} onChange={handleSearch}/>
      <form onSubmit={addperson}>
        <h2>Add New Person</h2>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
      <h2>Numbers</h2>
        <Person key={persons.name} person={persons}/>
      </ul>
      <ul>
        <h2>Filtered Persons</h2>
        <Person key={filteredPersons.name} person={filteredPersons}/>
      </ul>
    </div>
  )
}

export default App