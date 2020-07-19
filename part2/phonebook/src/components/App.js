import React, { useState,useEffect } from 'react'
import Person from './person'
import axios from 'axios'
const App = () => {
  const [ persons, setPersons ] = useState([{name:'Ishita',number:'1234567'}]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [search,setsearch]=useState("")
  const [filteredPersons,setfilteredPersons]=useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(response => {setPersons(response.data)})
      .catch(err=>console.log(err))
  }, [])

  const handleNewName=(event)=>{
      setNewName(event.target.value)
  }
  const handleNewNumber=(event)=>{
    setNewNumber(event.target.value)
}
const handleDelete=(person)=>{
  let ok=window.confirm(`Delete ${person.name}`)
  if(ok)
  {
  axios({
    method: 'DELETE',
    url: 'http://localhost:3001/persons/' + person.id
  })
  .then(res => {
    setPersons(res.data);
})
.catch(err=>console.log(err))
}
}
  const addperson=(event)=>{
      event.preventDefault()
      let maxid=persons.map((person)=>person.id).reduce(function(a, b) {
        return Math.max(a, b);
      });
      const newPerson={
          name: newName,
          number: newNumber,
          id: maxid+1
      }
      console.log(persons)
      if(persons.some(person=>person.name===newName))
      {let con=window.confirm(`${newName} is already added to phonebook , replace the old number with the new one?`)
      if(con){
        axios({
          method: 'PUT',
          url: 'http://localhost:3001/persons/' + newName,
          data:newPerson
        })
        .then(res => {
          setPersons(res.data);
      })
      .catch(err=>console.log(err))
      }
    }
      else 
      {
          axios.post('http://localhost:3001/persons',newPerson)
          .then((response)=>{console.log(`${response} added`)
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
          .catch(err=>console.log(err))
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
        <Person key={persons.name} person={persons} delete={handleDelete}/>
      </ul>
      <ul>
        <h2>Filtered Persons</h2>
        <Person key={filteredPersons.name} person={filteredPersons} delete={handleDelete}/>
      </ul>
    </div>
  )
}

export default App