import React, {useState} from 'react'
//To use hook just import {useState} function from 'react'
function HookCounter() {

    //Hooks are just functions you can call
    //useState is a function that accepts a default value as parameter and return a pair of values
    //and return(first = current value, second a update) 
    //Array destructuring
    const [count, setCount] = useState(0)

    return (
        <div>
            {/*Since setCount it is a function call just convert to a arrow function*/}
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
