import React from 'react'
import Person from './Person'

function NameList() {
    //4) Moving the elements to object
    const persons = [
        {
            id: 1,
            name: 'Bruce Object',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark Object',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana Object',
            age: 32,
            skill: 'Vue'
        }
    ]
    //Pattern to render list of datas
    //const personList = persons.map(person => <Person key={person.id} person={person}/>)

    const names = ['Bruce','Clark','Diana','Bruce']
    const nameList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2>)

    //3) Keeping the return simple and moving out the return logic
    //const names = ['Bruce','Clark','Diana']
    //const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>{nameList}</div>
        //<div>{nameList}</div>
        //2) Use curly braces to evaluate javascript in JSX and the map method from array
        /*<div> 
        {
            names.map(name => <h2>{name}</h2>)
        }
        </div>*/
        //1) One by one
        // <h2>{names[0]}</h2>
        // <h2>{names[1]}</h2>
        // <h2>{names[2]}</h2>
    )
}

export default NameList
