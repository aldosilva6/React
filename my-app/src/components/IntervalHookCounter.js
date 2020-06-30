import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const[count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    //An array empty tells react to not watch any change in this component
    //If want to watch you need to pass the [count] or use prevCount without the dependency list
    useEffect(() => {
       const interval = setInterval(tick, 1000) 

       return () => {
           clearInterval(interval)
       }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter

