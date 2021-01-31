import React , {useState,useEffect} from 'react'
import axios from 'axios'

const Filter = ({searchString, changeSearchString}) => 
  <div>find countries <input value={searchString} onChange={changeSearchString}/></div>


const Country = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>captial: {country.capital}</p>
      <p>population: {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((lang) => <li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img src = {country.flag} alt={country.name+'\'s flag'} />
    </div>
  )
}

const Countries = ({countries,setSearchString}) =>{
  if(countries.length > 10)
    return <div>Too many matches, specify another filter</div>
  else if(countries.length === 1)
    return <Country country={countries[0]}/>
  else if(!countries.length)
    return <div>No countries match</div>
  const setSearchStringToCountry = (name) => (
    () => setSearchString(name)
  )
  const showCountry = (country) => (
  <div key={country.name}> 
    {country.name} 
    <button onClick={setSearchStringToCountry(country.name)}> show </button>
  </div>
  )
  return (
    <div>
      {countries.map(showCountry)}
    </div>
  )
}
const App = () => {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')
  useEffect(
    () => {
      axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( res => ( setCountries(res.data) ))
    }
    ,[]
  )
  const changeSearchString = (arg) => setSearchString(arg.target.value)
  const shownCountries = countries.filter((country) => (country.name).toLowerCase().includes(searchString.toLowerCase()))
  console.log(shownCountries)
  return (
    <div>
      <Filter searchString={searchString} changeSearchString={changeSearchString}/>
      <Countries countries={shownCountries} setSearchString={setSearchString}/>
    </div>
  );
}

export default App