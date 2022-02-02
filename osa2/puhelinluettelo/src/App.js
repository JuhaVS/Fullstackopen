import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('')  

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

 const handleSearchChange = (event) => {
    console.log(event.target.value)
   setNewSearch(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    let x = 1

    const nameObject = {
      key: newName,
      name: newName,
      number: newNumber}

  for(let i = 0; i < persons.length; i++) {

    if(persons[i].name === nameObject.name) {
       window.alert(`${newName} is already added to phonebook`)
       setNewName('')
       setNewNumber('')
       x = 0
      }
      }

      if(x === 0){   
          setNewName('')
          setNewNumber('')
        }
      else{
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      }              
 }


  return (
    <div>
     <h2>Phonebook</h2>
        <Filter newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <h2>Add a new</h2>
        <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addName={addName}/>
      <h2>Numbers</h2>
        <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )

}

export default App
