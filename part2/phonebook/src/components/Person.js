import React from 'react'

const Person = (props) => {
    const {person,deleteID} = props
    const {name,number} = person
    return <div>{name} {number} <button onClick={()=>deleteID(person.id)}>delete</button></div>
}

export default Person