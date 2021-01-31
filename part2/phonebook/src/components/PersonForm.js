import React from 'react'

const PersonForm = ({newPerson,newNumber,handlePersonChange,handleNumberChange,addPerson}) => {
    return (
        <form onSubmit = {addPerson}>
        <div>name: <input value={newPerson} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type='submit'>save</button></div>
      </form>
    )
}

export default PersonForm