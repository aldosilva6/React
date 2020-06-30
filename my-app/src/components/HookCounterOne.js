import React, {useState, useEffect} from 'react'

//Importing useEffect from react to use the useEffect hook

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //Executed everytime the component is render
    //Pass a function as parameter to be executed everytime
    //To performance you can pass as second parameter as array to either props or state that we need to watch for
    //Array the values tha the effect depends on
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default HookCounterOne
