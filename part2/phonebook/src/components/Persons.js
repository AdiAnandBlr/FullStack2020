import React from 'react'
import Person from './Person'

const Persons = ({persons,deleteID}) => {
    return (
        <ul>
        {persons.map( (person) => 
            <Person person={person} key={person.name} deleteID={deleteID}/>
        )}
        </ul>
    )
}

export default Persons