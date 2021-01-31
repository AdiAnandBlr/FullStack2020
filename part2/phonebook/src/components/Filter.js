import React from 'react'

const Filter = ({searchString,onChange}) => {
    return (
        <div>
            filter shown with <input value={searchString} onChange={onChange}/>
        </div>
    )
}

export default Filter