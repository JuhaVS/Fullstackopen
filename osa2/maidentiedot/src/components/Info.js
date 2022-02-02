const Info = ({country, capital, population, languages, flag}) => {
    
  const i=Object.values(languages)


    return(
        <div>
        <h1>{country}</h1>
        <p>Capital {capital}</p>
        <p>Population {population}</p>
        <h2>Languages</h2> {i.map((language) => <p key ={language}> {language} </p>)}
        <img src={flag} alt="FAIL"/>
        </div>
      )
    }

export default Info