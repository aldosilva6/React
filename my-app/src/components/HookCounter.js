import React, {useState} from 'react'
//A function component
function HookCounter() {

    //array destructuring
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
