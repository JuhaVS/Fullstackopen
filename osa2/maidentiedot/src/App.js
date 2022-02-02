import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Search from './components/Search'

const App = () => {

const [newSearch, setNewSearch] = useState('')
const [countries, setCountries] = useState([])

useEffect(() => {
  console.log('effect')
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
}, [])

const handleSearchChange = (event) => {
  console.log(event.target.value)
  setNewSearch(event.target.value)
}

return(
<Search countries={countries} handleSearchChange={handleSearchChange} newSearch={newSearch} setNewSearch={setNewSearch}/>
)
}

export default App;
