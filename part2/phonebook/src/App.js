import React,{useState,useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/Persons'
import Notification from './components/Notification'
const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newNumber,setNewNumber] = useState('0123456789')
  const [newPerson, setNewPerson] = useState('new person...')
  const [searchString, setSearchString] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const getPersons = () => (
    personService
    .getAll()
    .then((ret) => setPersons(ret))
  )
  useEffect(getPersons,[])
  const addPerson = (event) => {
    event.preventDefault()
    console.log(persons)
    const personObject = {
      name: newPerson,
      number: newNumber
    }
    const id = persons.reduce(
      (acc,person) => person.name===newPerson?person.id:acc
      , false
    )
    if(id){
      if (window.confirm(`${newPerson} is already present, replace with new number?`)){
        personService
        .updatePerson(id,personObject)
        .then((data) => setPersons(persons.map(p => p.id!==id?p:personObject)))
        .catch(()=>{
          setErrorMessage("Information of " + personObject.name +"has already been removed")
          setPersons(persons.filter(p => p.id!==id))
          setTimeout(
            ()=> setErrorMessage(null)
            ,3000
          )
        })
      }
      else 
        console.log("cancelled")
    }
    else{
      personService
      .postPerson(personObject)
      .then((data) => setPersons(persons.concat([data])))
      setErrorMessage('Added ',personObject.name)
      setTimeout(()=>setErrorMessage(null),3000)
    }
    
    setNewPerson("")
    setNewNumber('')
  }

  const deleteID = (id) => {
    // console.log("trying to delete ",id)
    const toBeDeleted = persons.find(p=>p.id===id)
    if(window.confirm("Delete "+toBeDeleted.name+" ?"))
      personService
      .deletePerson(id)
      .then(()=> setPersons(persons.filter(person=>person.id!==id)))
  }
  const shownPersons = persons.filter((person)=>person.name.toLowerCase().includes(searchString))
  const handleFilter = (event) =>  setSearchString(event.target.value)
  const handlePersonChange = (event) => setNewPerson(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage}/>
      <Filter value={searchString} onChange={handleFilter}/>
      <h2>add a person</h2>
      <PersonForm 
      newNumber={newNumber}
      newPerson={newPerson}
      handleNumberChange={handleNumberChange}
      handlePersonChange={handlePersonChange}
      addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={shownPersons} deleteID={deleteID}/>
    </div>
  )
}

export default App