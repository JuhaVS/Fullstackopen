const Country = ({country, setNewSearch}) => {


  const handleSubmit = (event) => {
    event.preventDefault();
    setNewSearch(country)
      }
  
    return(
      <form onSubmit={handleSubmit}>
      {country}
      <input type="submit" value="show" />
    </form>
      )
    }

export default Country