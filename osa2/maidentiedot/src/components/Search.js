import Country from './Country'
import Info from './Info'
const Search = (props) => {

    let i = 0
    
    const result = props.countries.filter(country =>country.name.common.toLowerCase().includes(props.newSearch.toLowerCase()));

  if(result.length > 9) {
      return(
        <div>find countries <input value={props.newSearch} onChange={props.handleSearchChange}/> 
        <p>Too many matches, specify another filter</p>
        </div>
      )
  }

  if(result.length === 1){
    return(
        <div>find countries <input value={props.newSearch} onChange={props.handleSearchChange}/>
        {props.countries.filter(country => country.name.common.toLowerCase().includes(props.newSearch.toLowerCase())).map(country => 
        <Info key={i++} country={country.name.common} capital ={country.capital} population={country.population} languages = {country.languages} flag ={country.flags.png}/> )}
        </div>
        )
        }

  else{
    return(
  
    <div>find countries <input value={props.newSearch} onChange={props.handleSearchChange}/>

    <ul>
        {props.countries.filter(country => country.name.common.toLowerCase().includes(props.newSearch.toLowerCase())).map(country => 
        <Country key={i++} country={country.name.common} setNewSearch={props.setNewSearch}/> 
      )}
    </ul>
  
    </div>
    )
    }
    }
    export default Search;