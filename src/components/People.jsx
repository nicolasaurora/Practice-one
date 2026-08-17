import React from 'react'
import Person from './Person'

const People = ({names}) => {

    const namesP = names.filter((name) => name[0] === "P")
    
  return (
    <>
        {namesP.map((name) => (
            <Person key={name} name={name}/>
        ))}
        
    </>
  )
}

export default People